import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import NavBarTenant from "./NavBarTenant";
import {useEffect,useState} from 'react';
import Web3 from "web3";


import uuid from "uuid/v4";

const myContract=require('../contracts/houseLeaseConfig.json');


const GetDoorCode = () => {
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const tenant_uid="3Hz1jaYhetOtRP3EvCPNHDCFpdw2"
    const [door_code,setDoorCode]=useState(null);
    var web3;

    const getDoorCode=async ()=>{
    
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
        
        
          var contract=new web3.eth.Contract(myContract.abi,myContract.contract_address)

          const lease_id=await contract.methods.tenants(tenant_uid).call()
          
          
          const res1=await contract.methods.getDoorCode(tenant_uid,lease_id).call()
        
          setDoorCode(res1)
        
            
        
        
        }


        useEffect(()=>{

            getDoorCode();
   
   
           })
    
    return (  



        <div className="home">
       <NavBarTenant />
       <p>
           {door_code}
       </p>
     
    </div>

     




    );
}
 
export default GetDoorCode;