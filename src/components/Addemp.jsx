import React, { useEffect, useState } from 'react'
import {TextField,Button} from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';
const Addemp = (props) => {

  const navigate=useNavigate();
 const Location=useLocation();
  const[post,setPost] = useState(props.data);

  const[emp,setEmp]=useState();
  const inputHandler=(e)=>{
    setEmp({...emp,[e.target.name]:e.target.value});
  }

  



const addHandler=()=>{
  console.log("clicked",emp);
  if(props.method==="post")
  {
      axiosInstance.post("http://localhost:3005/api/",emp)
      .then((res)=>{
        console.log(res);
        alert(res.data.message);
        navigate('/admin');
      })
      .catch((err)=>{})
      }
  if(props.method==="put"){
    axiosInstance.put("http://localhost:3005/api/up/"+post._id,post)
    .then((res)=>{
      alert(res.data.message);
      window.location.reload(false);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
  let imageStyle = {
    height: "100%",
   //  width: "500px",
     backgroundImage:
     'url("https://www.sss-solutions.org/wp-content/uploads/2018/01/1116146294-login-page-background-image-112.jpg")',
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     color: "white",
    
  };
  return (
    <div style = {imageStyle}>
      <TextField label="Employee Name" variant="outlined" color="warning" focused name='Name' onChange={inputHandler} style={{width:'30%'}}/>
      <br/><br/>
      <TextField label="Employee ID" variant="outlined" color="warning" focused name='ID' onChange={inputHandler} style={{width:'30%'}}/>
      <br/><br/>
      <TextField label="Employee Position" variant="outlined" color="warning" focused name='Position' onChange={inputHandler} style={{width:'30%'}}/>
      <br/><br/>
      <TextField label="Employee Location" variant="outlined" color="warning" focused name='Location' onChange={inputHandler} style={{width:'30%'}} />
      <br/><br/>
      <TextField label="Employee Salary" variant="outlined" color="warning" focused name='Salary' onChange={inputHandler} style={{width:'30%'}} />
      <br/><br/>
      <TextField label="Username" variant="outlined" color="warning" focused name='Username' onChange={inputHandler} style={{width:'30%'}}/>
      <br/><br/>
      <TextField label="Password" type="password" variant="outlined" color="warning" focused  name='Password' onChange={inputHandler} style={{width:'30%'}} />
        <br/><br/>
        <Button variant="contained" color="success" onClick={addHandler} >ADD</Button>
        <br/>

<br/>


    </div>
  )
}

export default Addemp