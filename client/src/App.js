import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Axios from 'axios'
import Main from './components/Main'
import Login from './components/Login'
import History from './components/History'
import UserContext from './context/UserContext'

function App() {
  const [userData, setUserData] = useState({token: undefined, user:""})

  useEffect(()=>{
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if(token === null){
        localStorage.setItem("auth-token", "")
        token = ""
      }
      const tokenResponse = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        {headers: {'x-auth-token': token}}
      )
      
      if (tokenResponse.data) {
        const userResponse = await Axios.get(
          "http://localhost:5000/users/single",
          {headers: {'x-auth-token':token}}
        )
        setUserData({
          token,
          user:userResponse.data
        })
      }
    }


    checkLoggedIn();
  },[])

  return (
    <UserContext.Provider value = {{userData, setUserData}}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/history" component={History} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
