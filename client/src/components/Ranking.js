import React, { useState, useEffect } from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import AreaTable from "./AreaTable"
import Button from "@material-ui/core/Button"

function monthConverter(number) {
  if (number < 10) {
    return "0" + (number + 1)
  } else return number
}



export default function Ranking() {
  const [value, setValue] = useState("3")
  const [type, setType] = useState("All")
  const [data, setData] = useState()
  const [field, setField] = useState("name")
  const [selectedDate, handleDateChange] = useState(new Date())
  // eslint-disable-next-line
  const [month, setMonth] = useState(monthConverter(selectedDate.getMonth()))
  // eslint-disable-next-line
  const [year, setYear] = useState(selectedDate.getFullYear())
  const [crimeData, setCrimeData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/crimes/distinct", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setCrimeData(result)
      })
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    setMonth(monthConverter(selectedDate.getMonth()))
    setYear(selectedDate.getFullYear())
  }, [selectedDate])

  const crimeMenu = crimeData.map((item) => (
    <MenuItem value={item}>{item}</MenuItem>
  ))

  function handleSubmit() {
    if (type === "All") {     
      fetch(`http://localhost:5000/areas/ranking?number=${value}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          setData(res)
          setField("name")
        })
        .catch((e) => console.log(e))
    } else {
      fetch(`http://localhost:5000/crimes/complex?type=${type}&number=${value}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
          setData(res)
          setField("_id")
        })
        .catch((e) => console.log(e))
    }
  }

  return (
    <div>
      <div className="row">
        <FormControl
          component="fieldset"
          style={{ marginTop: "15px", marginRight: "40px" }}
        >
          <FormLabel component="legend">Ranking</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <FormControlLabel value="3" control={<Radio />} label="Top 3" />
            <FormControlLabel value="5" control={<Radio />} label="Top 5" />
            <FormControlLabel value="10" control={<Radio />} label="Top 10" />
          </RadioGroup>
        </FormControl>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="inline"
            openTo="year"
            views={["year", "month"]}
            label="Year and Month"
            style={{ marginTop: "15px" }}
            helperText="Start from year selection"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>

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
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
          Show Graph
        </Button>
      </div>
      {data ? <AreaTable data={data} x={field} /> : null}
    </div>
  )
}
