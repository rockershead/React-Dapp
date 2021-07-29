import { useStoreApi } from "../../store/storeApi";
import useWeb3 from "../../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import Web3 from "web3";
import NavBarOwner from "./NavBarLandlord";
import TenantCard from '../../components/TenantCard'
import LayoutLandlord from "../../components/LayoutLandlord";
const moment=require('moment');

import uuid from "uuid/v4";

const myContract=require('../../contracts/houseLeaseConfig.json');


const ViewTenants = (props) => {
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    //const web3js = useWeb3();
    var web3;
    
    const [final_arr_object,setArr]=useState(null);

   
    

    const listTenants=async()=>{
     var leaseId=props.location.state.leaseId
      
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
        
      //the owner who calls this function can only see his leases.
         //functions with msg.sender need to put call{from:address}!!!
        var res1=await contract.methods.listTenants(leaseId).call({from:address})    //array of owner_lease_id struct
        

        res1.forEach( array=> {

            id=id+1
           
           var new_object={"id":id,"leaseId":leaseId,"tenantName":array.tenantName,"age":array.age,"race":array.race,"tenant_wallet_address":array._tenantAddr}
          arr_object.push(new_object)
     
        })
        
        setArr(arr_object)
        
        
            
        
        
        }


       


    const setDoorCode=async(e,lease_id,tenant_wallet_address)=>{

        e.preventDefault();
        const door_code=e.target[0].value
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



        await contract.methods.giveDoorCode(door_code,lease_id,tenant_wallet_address).send({
        from:address
            })
        
        
        }

    
    


        useEffect(()=>{
            
         listTenants();
 

        },[])


        
    
    return (  


      <LayoutLandlord>
        <div className="home">
         
         <br></br>
         <br></br>
         {
       final_arr_object&&
       final_arr_object.map(object => (


        <  TenantCard note={object}  setDoorCode={setDoorCode} />
       ))
       
       
       }
             
             
         
         
         
     
    </div>
    </LayoutLandlord>
     




    );
}
 
export default ViewTenants;