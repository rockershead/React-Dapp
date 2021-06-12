import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import NavBarGeneral from "./NavBarGeneral";

const myContract=require('../contracts/houseLeaseConfig.json');




const Home = () => {

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

     <div className="home">
       <NavBarGeneral />
       {address ? (
          <>
            <p> Your account: {address}</p>
            <p> Ether Balance: {balance} </p>
            <p> LTOK Balance: {tokenBalance} </p>
          </>
        ) : null}
       <p> <Button
          onClick={() => getUserAccount()}
          variant="outlined"
          color="primary"
        >
          Connect your wallet
        </Button></p>
        &nbsp;
        <p><Button 
          Link
          onClick={() => history.push('/tenant') }
          variant="outlined"
          color="primary"
        >
          Tenant
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => history.push('/landlord') }
          variant="outlined"
          color="primary"
          
        >
          HouseOwner
        </Button></p>
     
    </div>



    );
}
 
export default Home;