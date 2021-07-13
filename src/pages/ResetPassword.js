import { useHistory } from 'react-router-dom';
//import firebase from '../utils/firestore';
import { Button,Typography,styles,Container,TextField,makeStyles,Avatar,CssBaseline,FormControlLabel,Checkbox,Link,Grid,Box} from "@material-ui/core";
import firebase from '../utils/firestore'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from "react"
import { useAuth } from "../store/AuthContext"

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: '#33ffe0',
    },
  }));




const ResetPassword = () => {
    const classes = useStyles()
    const history = useHistory();
    const { resetPassword  } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleReset=async e=>{
        e.preventDefault();
        
        const email=e.target[0].value
        

        console.log(email)
        
        
        try {
            setError("")
            setLoading(true)
            await resetPassword(email)
            alert("Check your email inbox for further instructions")
            
          } catch {
            alert("Failed to reset password")
          }
      
          setLoading(false)
    
    
    }


    return (  


        
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Password Reset
          </Typography>
          <form className={classes.form} autoComplete="off" onSubmit={e => handleReset(e)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              className={classes.button}
            >
              Reset Password
            </Button>
            <Grid container>
              
              <Grid item>
              <Link href="/" variant="body2">
                  {"Back to Login Page"}
                </Link>
              </Grid>
            </Grid>
            
              
            
          </form>
        </div>
        
      </Container>
    );
   
       
   
   
   
   
       


}





export default ResetPassword;