import { Link } from "react-router-dom";



const NavBarGeneral  = () => {
    return ( 
     <nav className="navbar">
         <h1>House Lease</h1>
         <div className="links">
         <a href="/">Home</a>
         
         <Link to="/aboutUs">About Us</Link>
         <Link to="/Contact">Contact</Link>
         </div>

         </nav>
     


     );
}
 
export default NavBarGeneral ;