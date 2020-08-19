import React, { useState, useEffect } from "react"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"

export default function CreateNew() {
  const [type, setType] = useState("Murder")
  const [area, setArea] = useState("Marousi")
  const [description, setDescription] = useState()
  const [areaData, setAreaData] = useState([])
  const [crimeData, setCrimeData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/areas/',{
      method:'GET',
    })
    .then(response=>response.json())
    .then(res => {setAreaData(res)})
    .catch(e => console.log(e))

    fetch('http://localhost:5000/crimes/distinct',{
      method:'GET'
    })
    .then(res => res.json())
    .then(result => {setCrimeData(result)})
    .catch(e=>console.log(e))
  },[])

  function handleSubmit() {
    const url = "http://localhost:5000/crimes/add"
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: type,
        area: area,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((res) => alert(res))
      .catch((e) => console.log(e))
  }

  const areaMenu = areaData.map((item) => <MenuItem value={item.name}>{item.name}</MenuItem>)
  const crimeMenu = crimeData.map((item) => <MenuItem value={item}>{item}</MenuItem>)

 
  return (
    <div className="centralise">
      <FormControl
        variant="filled"
        style={{ width: "300px", marginTop: "15px" }}
      >
        <InputLabel id="demo-simple-select-filled-label">
          Type of Crime
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {crimeMenu}
        </Select>
      </FormControl>
      <FormControl
        variant="filled"
        style={{ width: "300px", marginTop: "15px" }}
      >
        <InputLabel id="demo-simple-select-filled-label">
          Select Area
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          {areaMenu}
        </Select>
      </FormControl>
      <Input
        autoFocus
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the crime"
        required="true"
        color="primary"
      />

      <Button
        variant="contained"
        style={{
          width: "200px",
          height: "50px",
          background: "green",
          color: "white",
          marginTop: "20px",
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  )
}
