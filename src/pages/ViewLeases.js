import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import Web3 from "web3";
import NavBarTenant from "../pages/NavBarTenant";


import uuid from "uuid/v4";

const myContract=require('../contracts/houseLeaseConfig.json');


const ViewLeases = () => {
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3js = useWeb3();
    var web3;
    
    const [final_arr_object,setArr]=useState(null);

    const listLease=async()=>{

      
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

        var res1=await contract.methods.listAllLeaseIds().call()    //array of leaseIds


        res1.forEach( leaseId=> {

        promises.push(contract.methods.getLeaseData(leaseId).call().then(lease_info=>{
      
          id=id+1
    
         var new_object={"id":id,"leaseId":leaseId,"uid":lease_info.uid,"landlordName":lease_info.landlordName,"home_addr":lease_info.home_addr,"lease_expiry":lease_info.timestamp,"price":lease_info.value}
        arr_object.push(new_object)


        }))
     
        })
        return Promise.all(promises).then(done=>{
        //console.log(arr_object)
        setArr(arr_object)
        })
        
        
        
            
        
        
        }

    
    const makePayment=async(leaseId)=>{

      var contract=new web3js.eth.Contract(myContract.abi,myContract.contract_address)

        const tenantName="Hafiz"
        const tenant_uid="3Hz1jaYhetOtRP3EvCPNHDCFpdw2"

        await contract.methods.makePayment(tenant_uid,leaseId,tenantName).send({
        from:address
    })
    }


        useEffect(()=>{

         listLease();


        },[])


        
    
    return (  


        
        <div className="home">
         <NavBarTenant />
         {
       final_arr_object&&
       final_arr_object.map(object => (
        <div className="blog-preview" key={object.id} >
          <h2>{ object.leaseId }</h2>
          <p> { object.landlordName }</p>
          <p> { object.home_addr }</p>
          <p> { object.lease_expiry }</p>
          <p> { object.price/Math.pow(10,18) }</p>
          <p>
        
        <Button
          onClick={() => makePayment(object.leaseId) }
          variant="outlined"
          color="primary"
          
        >
          Make Payment
        </Button></p>
        </div>
      ))}
     
    </div>

     




    );
}
 
export default ViewLeases;