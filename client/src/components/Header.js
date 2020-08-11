import React, { useState, useContext} from "react"
import {useHistory} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import NotificationsIcon from "@material-ui/icons/Notifications"
import GavelIcon from '@material-ui/icons/Gavel';
import UserContext from '../context/UserContext'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize:'25px'
  },
  titleB: {
    marginTop:'8px',
    marginRight:'5px',
    fontSize:"20px"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}))

export default function Header() {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const { userData, setUserData } = useContext(UserContext)

  const history = useHistory()

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  function logOut(){
    setUserData({
      token:undefined,
      user:""
    })
    localStorage.setItem("auth-token","")
    history.push('/')
  }

  const menuId = "primary-search-account-menu"
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My submitted Crimes</MenuItem>
    </Menu>
  )
  

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor:'#ff8c00', height:'70px'}}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            fontSize='large'
            onClick={()=>history.push("/main")}
          >
            <GavelIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Criminality App
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Typography className={classes.titleB} style={{marginLeft:'30px'}} variant="h6" noWrap>
              Welcome, {userData.user.username}
            </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.menuButton}
            >
              <AccountCircle />
            </IconButton>
            <Typography className={classes.titleB} variant="h6" noWrap onClick={()=>history.push("/history")}>
              Crime History
            </Typography>
            <IconButton aria-label="show 17 new notifications"className={classes.menuButton} onClick={()=>history.push("/history")} color="inherit">
              <Badge color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Typography className={classes.titleB} style={{marginLeft:'10px'}} variant="h6" noWrap>
              Log out
            </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={logOut}
              color="inherit"
              className={classes.menuButton}
            >
              <MeetingRoomIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  )
}
