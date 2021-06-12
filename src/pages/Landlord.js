import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import NavBarOwner from "./NavBarLandlord";



import uuid from "uuid/v4";

const myContract=require('../contracts/houseLeaseConfig.json');


const LandlordPage = () => {
    
    


        
    
    return (  


        
        <div className="home">
      <NavBarOwner />
         <p>Welcome to House Lease.Lets create your lease.</p>
     
    </div>

     




    );
}
 
export default LandlordPage;