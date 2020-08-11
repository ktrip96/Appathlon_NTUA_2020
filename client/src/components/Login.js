import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import City from '../images/city.jpg'
import Signin from './Signin';
import Signup from './Signup';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${City})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

export default function Login() {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(true)

  function toggleLogin(){
      setSignIn(prev => !prev)
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={7} className={classes.image} />
      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
        {signIn?<Signin toggle = {toggleLogin}/>:<Signup toggle = {toggleLogin}/>}
      </Grid>
    </Grid>
  );
}
