import React, { useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import "../css/login.css"
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom"
import logo from "../images/logo.svg"
import { isEmail } from "validator"
import { Alert, Stack, AlertTitle, CircularProgress } from "@mui/material"

const useStyles = makeStyles({
  root: {
    maxWidth: "345px",
    width: "100%",
    padding: "17px"
  }
});

const FormPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setcPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const errorDivRef = useRef()
  const loading = useRef()

  const ErrorMessage = (text) => {
    setErrorMessage(text)
    errorDivRef.current.style.display = "block"
  }

  const SignUpUser = () => {
    console.log(name, email, password, cpassword)
    if (email === "" || password === "") {
      ErrorMessage("Please Add email or Passsword")
      return
    }

    if (!isEmail(email)) {
      ErrorMessage("the used email is not valid")
      setEmail("")
      return
    }

    if (password !== cpassword) {
      ErrorMessage("passsword and confirm password not match")
      return
    }

    loading.current.style.display = "flex"

  }

  const classes = useStyles();
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
            <AlertTitle>{errorMessage}</AlertTitle>
          </Alert>
        </Stack>
      </div>
      <div className="login">
        <Card className={classes.root}>

          <div className="login_logo">
            <img src={logo} alt="logo" />
          </div>

          <form className="login_form" onSubmit={(e) => e.preventDefault()}>
            <TextField
              id="outlined-textarea"
              label="Entet your name"
              placeholder="Username"
              className="form_input"
              variant="outlined"
              type="email"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />


            <TextField
              id="outlined-textarea"
              label="Entet your email"
              placeholder="Email"
              className="form_input"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />




            <TextField
              id="outlined-textarea"
              label="Type Your passwod"
              placeholder="Password"
              className="form_input"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />



            <TextField
              id="outlined-textarea"
              label="type password again"
              placeholder="confirm password"
              className="form_input"
              variant="outlined"
              type="email"
              value={cpassword}
              onChange={(e) => setcPassword(e.target.value)}
            />




            <div className="login_submit" >
              <Button variant="outlined" color="primary" disableElevation onClick={SignUpUser}>
                Sign Up
              </Button>


            </div>



            <Typography variant="body2" component="p" className="login_small">
              Don't have an account ?
              <NavLink to="/login"><span>Login in </span></NavLink>
            </Typography>

          </form>

        </Card>
      </div>
    </>
  );
};

export default FormPage;