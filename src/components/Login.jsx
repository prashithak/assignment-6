import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Login = () => {
  const navigate=useNavigate();
  const[user,setUser]=useState();
  const inputHandler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
    console.log(user);
  };
  const addHandler=()=>{
    console.log(user);
    axiosInstance.post("http://localhost:3005/api/login",user)
    .then((res)=>{
      
      alert(res.data.message);
      console.log(res.data.token);
      sessionStorage.setItem('userToken',res.data.token);
      navigate('/view');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  return (
    
    <div style={{backgroundImage: `url("https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"}}>
    <div  style={{ alignItems:'center', height: '100vh'}} >
    <Typography variant="h3" gutterBottom align='center'>
    LOGIN
     </Typography>
      <br/>
      <TextField id="standard-basic"  label="Username" variant="standard" name='Username' onChange={inputHandler}/>
        <br /><br/>
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          variant="standard"
          name='Password'
          onChange={inputHandler}
        />
        <br/><br/>
        <br/>
<Button variant="contained" color="success" onClick={addHandler}>
  LOGIN
</Button>
</div>
</div>
  )
}

export default Login