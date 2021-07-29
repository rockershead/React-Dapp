import { useStoreApi } from "../../store/storeApi";
import useWeb3 from "../../utils/useWeb3";
import { Button, TextField, makeStyles} from "@material-ui/core";
import {useEffect,useState} from 'react';
import Web3 from "web3";
import NavBarTenant from "./NavBarTenant";
import LayoutTenant from "../../components/LayoutTenant";
const moment=require('moment');
import { useHistory } from 'react-router-dom';


import uuid from "uuid/v4";

const myContract=require('../../contracts/houseLeaseConfig.json');


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
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
  //title: {
    //textDecoration: 'underline',
    //marginBottom: 20,
 // }
}))


const ViewLeases = () => {
  const classes = useStyles()
    
    const { balance, address, message, setAddress, setBalance,settokenBalance,tokenBalance } = useStoreApi();
    const web3js = useWeb3();
    var web3;
    const history = useHistory();
    
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
        var code;

        var res1=await contract.methods.listAllLeaseIds().call()    //array of leaseIds


        res1.forEach( leaseId=> {

        promises.push(contract.methods.getLeaseData(leaseId).call().then(lease_info=>{
      
          id=id+1
         
         var datetime=moment.unix(lease_info.timestamp).format("dddd MMMM Do YYYY, h:mm:ss a")
         
         var new_object={"id":id,"leaseId":leaseId,"landlordName":lease_info.landlordName,"home_addr":lease_info.home_addr,"lease_expiry":datetime,"price":lease_info.value}
        arr_object.push(new_object)


        }))
     
        })
        return Promise.all(promises).then(done=>{
        //console.log(arr_object)
        setArr(arr_object)
        })
        
        
        
            
        
        
        }

    
    


        useEffect(()=>{

         listLease();


        },[])


        
    
    return (  


        <LayoutTenant>
        <div className={classes.paper} >
         
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
          onClick={() => history.push({
            pathname: '/TenantPayment',
              state: {"leaseId":object.leaseId} // your data array of objects
          }) }
          variant="outlined"
          color="primary"
          
          
        >
         Go To Payments Page
        </Button></p>
        </div>
      ))}
     
    </div>

    </LayoutTenant>




    );
}
 
export default ViewLeases;