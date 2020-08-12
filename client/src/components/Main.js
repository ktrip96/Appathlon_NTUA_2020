import React from "react"
import { Redirect } from "react-router-dom"
import Header from "./Header"
import mainImage from "../images/main.jpg"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import EqualizerIcon from "@material-ui/icons/Equalizer"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import MapIcon from "@material-ui/icons/Map"
import CreateNew from './CreateNew'
import Map from './Map'
import Ranking from './Ranking'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 600,
  },
})

export default function Main() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function conditionalRender(){
      if(value === 0) return <CreateNew/>
      else if(value === 1) return <Ranking/>
      else if(value === 2) return <Map/>
  }

  if (localStorage.getItem("auth-token").length < 1) return <Redirect to="/" />
  return (
    <div>
      <Header />
      <div className="mainPage">
        <div className="boxA">
          <img
            src={mainImage}
            alt="city"
            style={{
              height: "800px",
              width: "800px",
              objectFit: "cover",
              boxShadow: "0px 6px 24px -4px rgba(0,0,0,0.92)",
              borderRadius: "1%",
            }}
          />
        </div>

        <div className="boxB">
          <Paper square className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Tab icon={<AddCircleOutlineIcon />} label="Submit New Crime" />
              <Tab icon={<EqualizerIcon />} label="Area Ranking" />
              <Tab icon={<MapIcon />} label="Heat Map" />
            </Tabs>
          </Paper>
          {conditionalRender()}
        </div>
      </div>
    </div>
  )
}
