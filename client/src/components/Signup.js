import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link2 from '@material-ui/core/Link';
import Box from "@material-ui/core/Box"
import {Link}from "react-router-dom"
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8,14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(25,1,1,1),
    backgroundColor: 'orange',
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
}));

export default function Signup({toggle}) {
  const classes = useStyles();

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
              />
            </Grid>
          </Grid>
          <Link to='/main'>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
      
  );
}
