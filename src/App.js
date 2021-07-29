
import { Button, TextField } from "@material-ui/core";
import NavBar from "./pages/NavBarGeneral";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateLease from "./pages/Landlord/CreateLease";
import ViewLeases from "./pages/Tenant/ViewLeases";
import TenantPage from "./pages/Tenant/Tenant";
import LandlordPage from "./pages/Landlord/Landlord";
import ViewOwnerLease from "./pages/Landlord/ViewOwnerLease";

import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { AuthProvider } from "./store/AuthContext"
import {PrivateRoute} from "./components/PrivateRoute"
import ImageDisplay from "./pages/ImageDisplay"
import ViewTenants from "./pages/Landlord/ViewTenants"
import ViewTenantLease from "./pages/Tenant/ViewTenantLease"
import TenantPayment from "./pages/Tenant/TenantPayment"

//const BigInteger = require('jsbn').BigInteger;
//import BigInteger from 'BigInt'



function App() {
    return (
      <Router>
        
          
        <div >
           
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/resetPassword">
                <ResetPassword />
              </Route>
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/createLease" component={CreateLease} />
              <PrivateRoute exact path="/viewLease" component={ViewLeases} />
              <PrivateRoute exact path="/tenant" component={TenantPage} />
              <PrivateRoute exact path="/landlord" component={LandlordPage} />
              <PrivateRoute exact path="/viewOwnerLease" component={ViewOwnerLease} />
             
              <PrivateRoute exact path="/imageDisplay" component={ImageDisplay} />
              <PrivateRoute exact path="/ViewTenants" component={ViewTenants} />
              <PrivateRoute exact path="/ViewTenants" component={ViewTenants} />
              <PrivateRoute exact path="/ViewTenantLease" component={ViewTenantLease} />
              <PrivateRoute exact path="/TenantPayment" component={TenantPayment} />
            </Switch>
            
          </div>
        
      </Router>
    );
  }
  
  export default App;
