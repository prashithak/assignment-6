import React from 'react'
import {Box,AppBar,Toolbar,Typography,Button} from '@mui/material';
import { Link } from 'react-router-dom';
const Admin_Nav = () => {
  const   tokenrelease=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar style={{backgroundColor:'darkgreen'}} position="static" >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}> welcome ADMIN</Typography>
      
      <Button color="inherit"><Link style={{color:'white',textDecoration:'none'}} to={'/add'}>Add Employee</Link></Button>
      <Button color="inherit" onClick={tokenrelease}><Link style={{color:'white',textDecoration:'none'}} to={'/'}>logout</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Admin_Nav