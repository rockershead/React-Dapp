import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import Web3 from "web3";
import NavBarOwner from "../pages/NavBarLandlord";


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
    
         var new_object={"id":id,"leaseId":array.leaseId,"home_addr":lease_info.home_addr,"lease_expiry":lease_info.timestamp,"price":lease_info.value}
        arr_object.push(new_object)


        }))
     
        })
        return Promise.all(promises).then(done=>{
        //console.log(arr_object)
        setArr(arr_object)
        })
        
        
        
            
        
        
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


        
        <div className="home">
         <NavBarOwner />
         {
       final_arr_object&&
       final_arr_object.map(object => (
        <div className="blog-preview" key={object.id} >
          <h2>{ object.leaseId }</h2>
          <p> { object.home_addr }</p>
          <p> { object.lease_expiry }</p>
          <p> { object.price/Math.pow(10,18) }</p>
          <p>
        
        <Button
          //onClick={() =>  }
          variant="outlined"
          color="primary"
          
        >
          Delete Lease
        </Button></p>
         &nbsp;&nbsp;&nbsp;
         <form onSubmit={e => setDoorCode(e,object.leaseId)}>
        <p>
        <TextField
            required
            label="Door Code"
            inputProps={{ step: "any" }}
            type="text"
            variant="filled"
          />
          &nbsp;&nbsp;&nbsp;
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          
        >
          Send Door Code
        </Button>
        
        
        
        </p>
        
        </form>
        </div>
      ))}
     
    </div>

     




    );
}
 
export default ViewOwnerLeases;