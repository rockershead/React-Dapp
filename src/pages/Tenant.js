import { useStoreApi } from "../store/storeApi";
import useWeb3 from "../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import NavBarTenant from "./NavBarTenant";
import LayoutTenant from "../components/LayoutTenant";


import uuid from "uuid/v4";

const myContract=require('../contracts/houseLeaseConfig.json');


const TenantPage = () => {
    
    


        
    
    return (  


        <LayoutTenant>
        <div className="home">
       
         <p>Welcome to House Lease.Choose your leases.</p>
     
    </div>
    </LayoutTenant>
     




    );
}
 
export default TenantPage;