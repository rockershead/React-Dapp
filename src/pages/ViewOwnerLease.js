import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import Web3 from "web3";
import NavBarOwner from "./NavBarLandlord";
import ObjectCard from '../components/card'
import LayoutLandlord from "../components/LayoutLandlord";
const moment=require('moment');

import uuid from "uuid/v4";

const myContract=require('../contracts/houseLeaseConfig.json');


const ViewOwnerLeases = () => {
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3js = useWeb3();
    var web3;
    
    const [final_arr_object,setArr]=useState(null);


    

    const listOwnerLease=async()=>{

      
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
        const owner_uid="3BmVMJhUffhBdL0aOvYuBzngIRp1"

        var res1=await contract.methods.listLandlordLeaseIds(owner_uid).call()    //array of leaseIds


        res1.forEach( array=> {

        promises.push(contract.methods.getLeaseData(array.leaseId).call().then(lease_info=>{
      
          id=id+1
          var datetime=moment.unix(lease_info.timestamp).format("dddd MMMM Do YYYY, h:mm:ss a")
         var new_object={"id":id,"leaseId":array.leaseId,"home_addr":lease_info.home_addr,"lease_expiry":datetime,"price":lease_info.value}
        arr_object.push(new_object)


        }))
     
        })
        return Promise.all(promises).then(done=>{
        //console.log(arr_object)
        setArr(arr_object)
        })
        
        
        
            
        
        
        }


        const handleDelete = async (id) => {
        
            const newObject = final_arr_object.filter(object => object.id != id)
            setArr(newObject)
          }


    const setDoorCode=async(e,lease_id)=>{

        e.preventDefault();
        const door_code=e.target[0].value
        var contract=new web3js.eth.Contract(myContract.abi,myContract.contract_address)



        await contract.methods.giveDoorCode(door_code,lease_id).send({
        from:address
            })
        
        
        }

    
    


        useEffect(()=>{

         listOwnerLease();


        },[])


        
    
    return (  


      <LayoutLandlord>
        <div className="home">
         
         <br></br>
         <br></br>
         {
       final_arr_object&&
       final_arr_object.map(object => (


        <  ObjectCard note={object} handleDelete={handleDelete} setDoorCode={setDoorCode} />
       ))
       
       
       }
             
             
         
         
         
     
    </div>
    </LayoutLandlord>
     




    );
}
 
export default ViewOwnerLeases;