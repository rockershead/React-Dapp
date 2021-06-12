
import { Button, TextField } from "@material-ui/core";
import NavBar from "./pages/NavBarGeneral";
import Home from "./pages/Home";
import CreateLease from "./pages/CreateLease";
import ViewLeases from "./pages/ViewLeases";
import TenantPage from "./pages/Tenant";
import LandlordPage from "./pages/Landlord";
import ViewOwnerLease from "./pages/ViewOwnerLease";
import GetDoorCode from "./pages/GetDoorCode";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





//const BigInteger = require('jsbn').BigInteger;
//import BigInteger from 'BigInt'



function App() {
    return (
      <Router>
        <div className="App">
          
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/createLease">
                <CreateLease />
              </Route>
              <Route exact path="/viewLease">
                <ViewLeases />
              </Route>
              <Route exact path="/tenant">
                <TenantPage />
              </Route>
              <Route exact path="/landlord">
                <LandlordPage />
              </Route>
              <Route exact path="/viewOwnerLease">
                <ViewOwnerLease />
              </Route>
              <Route exact path="/getDoorCode">
                <GetDoorCode />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
  
  export default App;
