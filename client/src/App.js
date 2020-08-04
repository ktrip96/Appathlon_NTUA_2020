import React from 'react';
import './App.css';

function App() {

  function handlePost(){
    const url = 'http://localhost:4000/'
    fetch(url,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",  
      },
      body:JSON.stringify({
        title:"yoyoyo",
        description:"Wasup"
      })
    })
    .then(response=>response.text())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>HELLO</h1>
      <button onClick={handlePost}>GET API</button>
      <br/>
      <button>GET API</button>
    </div>
  );
}

export default App;
