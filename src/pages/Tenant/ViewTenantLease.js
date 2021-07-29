import { useStoreApi } from "../../store/storeApi";
import useWeb3 from "../../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import Web3 from "web3";
import NavBarOwner from "../Landlord/NavBarLandlord";
import LeaseCard from '../../components/LeaseCard'
import LayoutTenant from "../../components/LayoutTenant";
const moment=require('moment');

import uuid from "uuid/v4";

const myContract=require('../../contracts/houseLeaseConfig.json');


const ViewTenantLease = () => {
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    //const web3js = useWeb3();
    var web3;

    
    const [final_arr_object,setArr]=useState(null);


    

    const listTenantLease=async()=>{

      
    if (window.ethereum) {
      // set up a new provider
      try {
         web3 = new Web3(window.ethereum);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
       web3 = new Web3(window.web3);
    }
    
        //abi and contract address
        var contract=new web3.eth.Contract(myContract.abi,myContract.contract_address)
        
       
        
        
        var id=0
        var promises=[];
        var arr_object=[];
        var code;
       
        
      //the owner who calls this function can only see his leases.
         //functions with msg.sender need to put call{from:address}!!!
        var leaseId=await contract.methods.listTenantLeaseIds().call({from:address})    //returns leaseId
        

        

        contract.methods.getLeaseData(leaseId).call().then(async lease_info=>{
      
          id=id+1
          var datetime=moment.unix(lease_info.timestamp).format("dddd MMMM Do YYYY, h:mm:ss a")
          try{
            var door_code=await contract.methods.getDoorCode(leaseId).call({from:address})

            if((door_code!=undefined)||(door_code!=""))
            { code=door_code}
            else
            {code=""}

          }
          catch{
              code=""
          }
        
         var new_object={"id":id,"leaseId":leaseId,"home_addr":lease_info.home_addr,"lease_expiry":datetime,"price":lease_info.value,"code":code}
        arr_object.push(new_object)


        }).then(done=>{
        //console.log(arr_object)
        setArr(arr_object)
        })
        
        
        
            
        
        
        }


        const handleDelete = async (id,leaseId) => {

          if (window.ethereum) {
            // set up a new provider
            try {
               web3 = new Web3(window.ethereum);
            } catch (error) {
              console.error(error);
            }
          } else if (window.web3) {
             web3 = new Web3(window.web3);
          }
          const newObject = final_arr_object.filter(object => object.id != id)
            setArr(newObject)
              //abi and contract address
              var contract=new web3.eth.Contract(myContract.abi,myContract.contract_address)
              await contract.methods.deleteTenantLeaseId(leaseId).send({
                from:address
                })
        
            
          }


   

    
    


        useEffect(()=>{

         listTenantLease();


        },[])


        
    
    return (  


      <LayoutTenant>
        <div className="home">
         
         <br></br>
         <br></br>
         {
       final_arr_object&&
       final_arr_object.map(object => (


        <  LeaseCard note={object} handleDelete={handleDelete}  />
        
       ))
       
       
       }
             
             
             
         
         
     
    </div>
    </LayoutTenant>
     




    );
}
 
export default ViewTenantLease;