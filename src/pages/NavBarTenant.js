import { Link } from "react-router-dom";



const NavBarTenant  = () => {
    return ( 
     <nav className="navbar">
         <h1>House Lease</h1>
         <div className="links">
         <a href="/home">Home</a>
         <Link to="/viewLease">View Leases</Link>
         <Link to="/getDoorCode">Get Door Code</Link>
         
         </div>

         </nav>
     


     );
}


export default NavBarTenant;
