import React, { useState, useContext } from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Link2 from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import UserContext from "../context/UserContext"

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(25, 1, 1, 1),
    backgroundColor: "orange",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    background: "#faa200",
    "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#b57500",
    },
  },
}))

export default function Signup({ toggle }) {
  const classes = useStyles()
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  })
  // eslint-disable-next-line
  const { userData, setUserData } = useContext(UserContext)

  function handleChange(e) {
    const { name, value } = e.target
    setCredentials((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit() {
    let url = "http://localhost:5000/users/register"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        username: credentials.username,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message !== undefined) alert(res.message)
        else {
          console.log("signup result:", res)
          url = "http://localhost:5000/users/login"
          return fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("TOKEN IS ", res.token)
              localStorage.setItem("auth-token", result.token)
              console.log("sign in result:", result)
              setUserData({ token: result.token, user: result.user })
            })
            .catch((error) => console.log(error))
        }
      })

      .catch((error) => console.log(error))
  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h4">
        Sign up
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoComplete="username"
              name="username"
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              onChange={handleChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Link to="/main">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Link>
        <Grid container justify="flex-end">
          <Grid item>
            <Link2 href="#" variant="subtitle1" onClick={toggle}>
              Already have an account? Sign in
            </Link2>
          </Grid>
        </Grid>
        <Box mt={22}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link2 color="inherit" href="https://github.com/ktrip96">
              Tripalitakis Konstantinos
            </Link2>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </form>
    </div>
  )
}
