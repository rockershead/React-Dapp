import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField,Typography,Container,makeStyles,Grid } from "@material-ui/core";

//import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { useHistory } from 'react-router-dom';
import NavBarGeneral from "./NavBarGeneral";
import Layout from '../components/Layout';

const myContract=require('../contracts/houseLeaseConfig.json');


const useStyles = makeStyles((theme) =>({
  btn: {
    //fontSize: 60,
    backgroundColor: '#33ffe0',
    '&:hover': {
      background: 'grey'
    },
    color:'green',
    
  },
  paper: {
    marginTop: theme.spacing(30),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  //title: {
    //textDecoration: 'underline',
    //marginBottom: 20,
 // }
}))


const Home = () => {
   const classes = useStyles()

    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3 = useWeb3();
    const history = useHistory();

    // get user account on button click
  const getUserAccount = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        web3.eth.getAccounts().then(accounts => {
          setAddress(accounts[0]);
          updateBalance(accounts[0]);
          updateTokenBalance(accounts[0]);
          
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Metamask extensions not detected!");
    }
  };

  const updateBalance = async fromAddress => {
    await web3.eth.getBalance(fromAddress).then(value => {
      setBalance(web3.utils.fromWei(value, "ether"));
    });
  };

  const updateTokenBalance = async fromAddress => {
    const tokenInst = new web3.eth.Contract(myContract.leaseTokenAbi, myContract.lease_token_contract_address);
    const token_balance = await tokenInst.methods.balanceOf(fromAddress).call()
    settokenBalance(web3.utils.fromWei(token_balance, "ether"))
  };


    return (  
      <Layout>
      <div className={classes.paper}>
         
       {address ? (
          <>
            <p> Your account: {address}</p>
            <p> BNB Balance: {balance} </p>
            <p> LTOK Balance: {tokenBalance} </p>
          </>
        ) : null}
        <br></br>
        
       <p> <Button
          onClick={() => getUserAccount()}
          variant="contained"
          theme="default"
          endIcon={<AccountBalanceWalletIcon  />}
          className={classes.btn}
        >
          Connect your wallet
        </Button></p>
        &nbsp;
        <p><Button 
          Link
          onClick={() => history.push('/tenant') }
          variant="contained"
          className={classes.btn}
          
        >
          Tenant
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => history.push('/landlord') }
          variant="contained"
          className={classes.btn}
          
        >
          HouseOwner
        </Button></p>
        
        
        </div>
        </Layout>


    );
}
 
export default Home;