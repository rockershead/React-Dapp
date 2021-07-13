
import { Button, TextField } from "@material-ui/core";
import NavBar from "./pages/NavBarGeneral";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateLease from "./pages/CreateLease";
import ViewLeases from "./pages/ViewLeases";
import TenantPage from "./pages/Tenant";
import LandlordPage from "./pages/Landlord";
import ViewOwnerLease from "./pages/ViewOwnerLease";
import GetDoorCode from "./pages/GetDoorCode";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import { AuthProvider } from "./store/AuthContext"
import {PrivateRoute} from "./components/PrivateRoute"
import ImageDisplay from "./pages/ImageDisplay"



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
              <PrivateRoute exact path="/getDoorCode" component={GetDoorCode} />
              <PrivateRoute exact path="/imageDisplay" component={ImageDisplay} />
            </Switch>
            
          </div>
        
      </Router>
    );
  }
  
  export default App;
