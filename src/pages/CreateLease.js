import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import NavBarOwner from "./NavBarLandlord";


import uuid from "uuid/v4";

const myContract=require('../contracts/houseLeaseConfig.json');


const CreateLease = () => {
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3 = useWeb3();

    const createLease=async e=>{
    
        e.preventDefault();
        const name=e.target[0].value
        const house_addr=e.target[1].value
        const lease_time=e.target[2].value
        const price=e.target[3].value
        
        //abi and contract address
        var contract=new web3.eth.Contract(myContract.abi,myContract.contract_address)
        const owner_uid="3BmVMJhUffhBdL0aOvYuBzngIRp1"
        
        const uid=uuid()
        
        await contract.methods.createLease(owner_uid,name,house_addr,lease_time,price,uid).send({
        from:address
        })
      
        //updateBalance(address);
        
        
        
        
        
        
         //var res1=await contract.methods.getLeaseData(uid).call()
       // console.log(res1)
        
        
        
            
        
        
        }
    
    return (  



        <div className="home">
       <NavBarOwner />
       <form onSubmit={e => createLease(e)}>
         <p> <TextField
            required
            label="Name"
            inputProps={{ step: "any" }}
            type="text"
            variant="filled"
          /></p>
          <p><TextField 
          required 
          label="House Address" 
          variant="filled"
          type="text" 
          /></p>
          <p><TextField
            required
            label="End of lease time"
            inputProps={{ step: "any" }}
            type="number"
            variant="filled"
          /></p>
          <p><TextField 
          required 
          label="Amount of LTOK" 
          variant="filled" 
          type="number"
          /></p>
          
          <Button
            style={{ margin: "10px" }}
            type="submit"
            variant="outlined"
            color="default"
          >
            Create Lease
          </Button>
        </form>
     
    </div>

     




    );
}
 
export default CreateLease;