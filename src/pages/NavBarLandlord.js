import { Link } from "react-router-dom";



const NavBarOwner  = () => {
    return ( 
     <nav className="navbar">
         <h1>House Lease</h1>
         <div className="links">
         <a href="/">Home</a>
         <Link to="/createLease">Create Lease</Link>
         
         <Link to="/viewOwnerLease">My Leases</Link>
         
         </div>

         </nav>
     


     );
}


export default NavBarOwner ;
