import React,{useState,useRef} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import "../css/login.css"
import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom"
import logo from "../images/logo.svg"
import {isEmail} from "validator"

import { Alert, Stack, AlertTitle, CircularProgress } from "@mui/material"


const useStyles = makeStyles({
  root: {
    maxWidth: "345px",
    width:"100%",
    padding:"17px"
  }
});

const FormPage = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const classes = useStyles();
  const errorDivRef = useRef()
  const loading = useRef()


  const Error = (text)=>{
    setError(text)
    errorDivRef.current.style.display = "block"
  } 

  const Login = ()=>{
    if(email===""){
      Error("please add a verified email address")
      return
    }

    if(password===""){
      Error("please enter your correct password")
      return
    }

    if(!isEmail(email)){
      Error("Please enter a valid email")
    }

    loading.current.style.display = "flex"
  }

  return (
<>


<div style={{ "position": "fixed","zIndex":2, "width": "100%", "height": "100%", "display": "none", "justifyContent": "center", "alignItems": "center", "backgroundColor": "#fff" }} ref={loading}>
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack>
  </div>

  <div style={{ "width": "100%", "display": "none" }} ref={errorDivRef}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error" onClose={() => errorDivRef.current.style.display = "none"}>
            <AlertTitle>{error}</AlertTitle>
          </Alert>
        </Stack>
      </div>


    <div className="login"> 
      <Card className={classes.root}>
        
      <div className="login_logo">
        <img src={logo} alt="logo"/>
      </div>


        <form className="login_form">
        <TextField
          id="outlined-textarea"
          label="Entet your email"
          placeholder="Email"
          className="form_input"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

<TextField
          id="outlined-textarea"
          label="Type Your passwod"
          placeholder="Password"
          className="form_input"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />



        <div className="login_submit" >
        <Button variant="outlined" color="primary" disableElevation onClick={Login}>
      Login
      </Button>


        </div>



        <Typography variant="body2" component="p" className="login_small">
          Don't have an account ? 
          <NavLink to="/signup"><span>Sign in </span></NavLink>
        </Typography>
        
        </form>

      </Card>
    </div></>
  );
};

export default FormPage;