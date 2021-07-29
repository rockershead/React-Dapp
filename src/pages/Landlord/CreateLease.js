import { useStoreApi } from "../../store/storeApi";
import useWeb3 from "../../utils/useWeb3";
import { Button, TextField,makeStyles,DateTimePicker} from "@material-ui/core";
import NavBarOwner from "./NavBarLandlord";
import LayoutLandlord from "../../components/LayoutLandlord";

import uuid from "uuid/v4";
const moment=require('moment');
var bigInt = require("big-integer");

const myContract=require('../../contracts/houseLeaseConfig.json');
const useStyles = makeStyles((theme) =>({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  btn: {
    //fontSize: 60,
    backgroundColor: '#33ffe0',
    '&:hover': {
      background: 'grey'
    },
    //color:'green',
    
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textfield:{

    width: 100,
  }
  
}))


const CreateLease = () => {
  const classes = useStyles()
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3 = useWeb3();

  
	
// disable past dates
const yesterday = moment().subtract(1, 'day');
const disablePastDt = current => {
  return current.isAfter(yesterday);
};

    const createLease=async e=>{
    
        e.preventDefault();
        const name=e.target[0].value
        const house_addr=e.target[2].value
        const lease_time=e.target[4].value       //need to convert to unix time
        const price=bigInt((e.target[6].value)*(10**18))   //bigInt library returns an object
  
        
        console.log(price.value)
       

        const unix_lease_time=moment(lease_time ,'YYYY-MM-DDTHH:mm').unix()
        //abi and contract address
        var contract=new web3.eth.Contract(myContract.abi,myContract.contract_address)
        
        //console.log(unix_lease_time)
        const uid=uuid()
        
        await contract.methods.createLease(name,house_addr,unix_lease_time,price.value,uid).send({
        from:address
        })
      
        //updateBalance(address);
        
        
        
        
        
        
         //var res1=await contract.methods.getLeaseData(uid).call()
       // console.log(res1)
        
        
        
            
        
        
        }
    
    return (  


     <LayoutLandlord>
        <div className={classes.paper}>
       
       <form autoComplete="off" onSubmit={e => createLease(e)}>
         <p> <TextField 
            className={classes.field}
            required
            label="Name"
            inputProps={{ step: "any" }}
            type="text"
            variant="outlined"
            style = {{width: 500}}
            fullWidth
            //error
          /></p>
          <p><TextField 
          className={classes.field}
          required 
          label="House Address" 
          variant="outlined"
          type="text" 
          fullWidth
          /></p>
          <p><TextField
          className={classes.field}
            required
            
            label="Lease Expiry Payment"
            //inputProps={{ step:"any",min:"2021-07-13T00:00" }}
            //inputProps={{ step:"any",min:moment(new Date()).add(2, 'days').format("YYYY-MM-DDTHH:mm") }}
            inputProps={{ step:"any",min:moment(new Date()).add(48, 'hours').format("YYYY-MM-DDTHH:mm") }}
            type="datetime-local"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          /></p>
          <p><TextField 
          className={classes.field}
          required 
          label="Amount of LTOK" 
          variant="outlined" 
          type="number"
          fullWidth
          /></p>
          
          
          <Button
            className={classes.btn}
            style={{ margin: "10px" }}
            type="submit"
            variant="outlined"
            
          >
            Create Lease
          </Button>
        </form>

        <p><TextField 
          className={classes.field}
          required 
          label="Extra Comments" 
          variant="outlined" 
          type="number"
          fullWidth
          multiline
          rows={8}
          /></p>
     
    </div>

    </LayoutLandlord>




    );
}
 
export default CreateLease;