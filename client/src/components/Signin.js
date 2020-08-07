import React from "react"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Link2 from "@material-ui/core/Link"
import {Link}from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(30,1,1,1),
    backgroundColor: 'orange',
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color:'white',
    background:'#faa200',
    "&:hover": {
        //you want this to be the same as the backgroundColor above
        backgroundColor: "#b57500"
    }
  },
}))

export default function Signin({ toggle }) {
  const classes = useStyles()

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h4">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Link to='/main'>
        <Button
          fullWidth
          style={{ backgroundColor: '#ffaa200' }}
          className={classes.submit}
        >
          Sign In
        </Button>
        </Link>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Link2 href="#" variant="subtitle1" onClick={toggle}>
              {"Don't have an account? Sign Up"}
            </Link2>
          </Grid>
        </Grid>
        <Box mt={24}>
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
