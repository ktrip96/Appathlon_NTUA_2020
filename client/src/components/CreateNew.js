import React, { useState } from "react"

export default function CreateNew() {
  const [type, setType] = useState('Murder')
  const [area, setArea] = useState('Marousi')
  const [description, setDescription] = useState('Describe the Crime')

  function handleSubmit(){
      const url = "http://localhost:5000/crimes/add"
      fetch(url, {
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              "type":type,
              "area":area,
              "description":description
          })
      })
      .then(response=> response.json())
      .then(res=>alert(res))
      .catch(e => console.log(e))
  }

  return (
    <div className="centralise">
      <label>Crime Type</label>
      <select
        value={type}
        name="type"
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Murder">Murder</option>
        <option value="whatever">Whatever</option>
        <option value="whatever2">Whatever2</option>
      </select>
      <label>Area</label>
      <select
        value={area}
        name="area"
        onChange={(e) => setArea(e.target.value)}
      >
        <option value="Marousi">Australia</option>
        <option value="Galatsi">Canada</option>
        <option value="Patisia">USA</option>
      </select>
      <textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        Describe the Crime
      </textarea>
      <button onClick={handleSubmit}>Submit Crime</button>
    </div>
  )
}
