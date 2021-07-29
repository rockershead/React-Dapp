import { useStoreApi } from "../../store/storeApi";
import useWeb3 from "../../utils/useWeb3";
import { Button, TextField,makeStyles,DateTimePicker} from "@material-ui/core";
import NavBarOwner from "../Landlord/NavBarLandlord";
import LayoutTenant from "../../components/LayoutTenant";


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


const TenantPayment = (props) => {
  const classes = useStyles()
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3 = useWeb3();
    
    
    
  
	


const makePayment=async(e)=>{
    e.preventDefault();
    var contract=new web3.eth.Contract(myContract.abi,myContract.contract_address)
    
    var leaseId=props.location.state.leaseId
        var tenantName=e.target[0].value
        var age=e.target[2].value
        var race=e.target[4].value
      

      await contract.methods.makePayment(leaseId,tenantName,age,race).send({
      from:address
  })
  }
    
    return (  


     <LayoutTenant>
        <div className={classes.paper}>
       
       <form autoComplete="off" onSubmit={e => makePayment(e)}>
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
          label="Age" 
          variant="outlined"
          type="number" 
          fullWidth
          /></p>
         
          <p><TextField 
          className={classes.field}
          required 
          label="Race" 
          variant="outlined" 
          type="text"
          fullWidth
          /></p>
          
          
          <Button
            className={classes.btn}
            style={{ margin: "10px" }}
            type="submit"
            variant="outlined"
            
          >
            Make Payment
          </Button>
        </form>

        
     
    </div>

    </LayoutTenant>




    );
}
 
export default TenantPayment;