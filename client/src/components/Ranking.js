import React, {useState, useEffect} from "react"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { DatePicker, MuiPickersUtilsProvider, } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'; 
import AreaTable from './AreaTable'


function monthConverter(number){
  if(number < 10 ){
      return '0'+(number+1)
  }
  else return number
}

export default function Ranking() {
  const [value, setValue] = useState("3")
  const [type, setType] = useState("All Crimes")
  const [selectedDate, handleDateChange] = useState(new Date());
  const [month, setMonth] = useState(monthConverter(selectedDate.getMonth()))
  const [year, setYear] = useState(selectedDate.getFullYear())

  useEffect(()=>{
    setMonth(monthConverter(selectedDate.getMonth()))
    setYear(selectedDate.getFullYear())
  },[selectedDate])

  function handleSubmit(){
    fetch(`http://localhost:5000/areas/ranking?number=${value}`,{
      method:'GET'
    })
    .then(response=>response.json())
    .then(res => console.log('ranking', res))
    .catch(e => console.log(e))
  }

  return (
    <div className="centralise2">
      <FormControl component="fieldset">
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
      <FormControl variant="filled" style={{width:'300px'}}>
        <InputLabel id="demo-simple-select-filled-label">Type of Crime</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={(e)=> setType(e.target.value)}
        >
          <MenuItem value="All">
            All
          </MenuItem>
          <MenuItem value={"Murder"}>Murder</MenuItem>
          <MenuItem value={"Whatever"}>Whatever</MenuItem>
          <MenuItem value={"Whatever2"}>Whatever2</MenuItem>
        </Select>
      </FormControl>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        variant="inline"
        openTo="year"
        views={["year", "month"]}
        label="Year and Month"
        helperText="Start from year selection"
        value={selectedDate}
        onChange={handleDateChange}
      />
      </MuiPickersUtilsProvider>
      <button onClick={handleSubmit}>Show Graph</button>
      <AreaTable/>
    </div>
  )
}
