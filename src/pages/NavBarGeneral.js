import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography'



const NavBarGeneral  = () => {
    return ( 
     <nav className="navbar">

    
    <Typography
        variant="h3" 
        color="textSecondary"
        //component="h2"
        gutterBottom
        align="center"
      >
       House Lease
      </Typography>
       &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
         
         <div className="links">
         <a href="/home">Home</a>
         
         <Link to="/aboutUs">About Us</Link>
         <Link to="/Contact">Contact</Link>
         </div>

         </nav>
     


     );
}
 
export default NavBarGeneral ;