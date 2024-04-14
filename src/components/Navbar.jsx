import React from 'react'
import{AppBar,Box,Button,Toolbar,Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const   tokenrelease=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
  
    <Box sx={{ flexGrow: 1 }} >
    <AppBar style={{backgroundColor:'darkgreen'}} position="static" >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}> welcome USER</Typography>
      <Button color="inherit" onClick={tokenrelease}><Link style={{color:'white',textDecoration:'none'}} to={'/'}>logout</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar