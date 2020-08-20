import React, { useState, useEffect } from "react"
import MaterialTable from "material-table"

export default function CrimeTable({ day,month,year }) {
  const columns = [
    { title: "Type", field: "type" },
    { title: "Desrciption", field: "description" },
    { title: "Area", field: "area" },
    {
      title: "Verified by Police",field: "verified",
    },
    { title: "Date", field: "date" },
  ]
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/crimes`,{
          method:'GET'
      })
      .then(response=>response.json())
      .then(res => {
        console.log("Crimetable FIRST TIME data:", res)
        setData(res)
      })
      .catch(error=>console.log(error))
  },[])

  useEffect(() => {
    fetch(`http://localhost:5000/crimes/date?day=${day}&month=${month}&year=${year}`,{
          method:'GET'
      })
      .then(response=>response.json())
      .then(res => {
        console.log("Crimetable data:", res)
        setData(res)
      })
      .catch(error=>console.log(error))
  }, [day,month,year])

  return (
    <MaterialTable
      title=""
      columns={columns}
      data={data}
      style={{ backgroundColor: "#ffffff" }}
      options={{
        headerStyle: {
          fontSize: "20px",
          fontWeight: "bold",
          color: "#fe7f2d",
          backgroundColor: "#ffffff",
        },
      }}
    />
  )
}
