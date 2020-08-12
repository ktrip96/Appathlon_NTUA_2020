import React, {useState} from "react"
import Header from "./Header"
import CrimeTable from "./CrimeTable"
import Image from "../images/history.jpg"
import Button from "@material-ui/core/Button"
import { useHistory } from "react-router-dom"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"

function dayConverter(number){
    if(number < 10 ){
        return '0'+number
    }
    else return number
}
function monthConverter(number){
    if(number < 10 ){
        return '0'+(number+1)
    }
    else return number
}

export default function History() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [day,setDay] = useState(1)
  const [month, setMonth] = useState(1)
  const [year, setYear] = useState(1900)

  function handleClick(){
    setDay(dayConverter(selectedDate.getDate()))
    setMonth(monthConverter(selectedDate.getMonth()))
    setYear(selectedDate.getFullYear())
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const history = useHistory()
  const image = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    boxShadow: "0px 6px 24px -4px rgba(0,0,0,0.92)",
    borderRadius: "1%",
  }

  const container = {
    height: "400px",
    width: "1900px",
    marginTop: "10px",
    marginBot: "10px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }

  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <Header />
      <div style={container}>
        <img alt="dark city" style={image} src={Image} />
      </div>
      <CrimeTable day={day} month={month} year={year}/>
      <div style={{display:'flex', justifyContent:'center', margin:'20px'}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <Button
        variant="contained"
        style={{ width: "300px", height:'50px', marginTop:'13px', marginLeft:'30px' }}
        color="primary"
        onClick={handleClick}
      >
        Show Crimes
      </Button>{" "}
      
      <Button
        variant="contained"
        style={{ width: "300px",height:'50px', background:'green', color:'white',marginTop:'13px', marginLeft:'30px'}}
        onClick={() => history.push("/main")}
      >
        Submit new Crime
      </Button>
      </div>
     
    </div>
  )
}
