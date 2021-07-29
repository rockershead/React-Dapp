import { useStoreApi } from "../../store/storeApi";
import useWeb3 from "../../utils/useWeb3";
import { Button, TextField } from "@material-ui/core";
import {useEffect,useState} from 'react';
import NavBarOwner from "./NavBarLandlord";
import LayoutLandlord from "../../components/LayoutLandlord";



import uuid from "uuid/v4";

const myContract=require('../../contracts/houseLeaseConfig.json');


const LandlordPage = () => {
    
    


        
    
    return (  


        <LayoutLandlord>
        <div className="home">
      
         <p>Welcome to House Lease.Lets create your lease.</p>
     
    </div>

    </LayoutLandlord>




    );
}
 
export default LandlordPage;