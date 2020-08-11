import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from './Header'

export default function Main() {
    
    function handleClick(){
        const url = 'http://localhost:5000/crimes'
        fetch(url,{
            method:'GET'
        })
        .then(response => response.json())
        .then(res => console.log(res))
    }
    if(localStorage.getItem('auth-token').length < 1) return <Redirect to = '/'/>
    return (
        <div>
            <Header/>
            <h1>This is the Main page</h1>
            <button onClick = {handleClick}>Get Crimes</button>
            <button>Get Users</button>
            <button>Get Areas</button>
        </div>
    )
}
