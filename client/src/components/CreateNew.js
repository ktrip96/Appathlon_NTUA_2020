import React, { useState } from "react"
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
          <MenuItem value="All">All</MenuItem>
          <MenuItem value={"Murder"}>Murder</MenuItem>
          <MenuItem value={"Whatever"}>Whatever</MenuItem>
          <MenuItem value={"Whatever2"}>Whatever2</MenuItem>
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
          <MenuItem value="All">All</MenuItem>
          <MenuItem value={"Murder"}>Murder</MenuItem>
          <MenuItem value={"Whatever"}>Whatever</MenuItem>
          <MenuItem value={"Whatever2"}>Whatever2</MenuItem>
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
