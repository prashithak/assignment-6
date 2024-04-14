import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';

import Icon from "react-crud-icons";
// import "react-crud-icons/dist/react-crud-icons.css";

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Addemp from './Addemp';
import axiosInstance from '../axiosinterceptor';


const Admin = () => {
  const [up,setUp]=useState(false);
  const[singleVal,setSingleVal]=useState([]);
  const navigate=useNavigate();

  const[view,setView]=useState([]);
  
useEffect(()=>{
  axiosInstance.get("http://localhost:3005/api/view").then((res)=>{
setView(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })

},[])

const updateemp = (val) => {
  console.log(val);
setUp(true); 
console.log(up);
setSingleVal(val);
console.log(singleVal)

};

const deleteemp=(id)=>{
  axiosInstance.delete("http://localhost:3005/api/del/"+id)
  .then((res)=>{alert(res.data.message);})
  .catch((err)=>{console.log(err);});
};

let imageStyle = {
  height: "100%",
 //  width: "500px",
   backgroundImage:
   'url("https://st.depositphotos.com/1001069/1259/i/450/depositphotos_12595238-stock-photo-nature-blurred-bokeh-background.jpg")',
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   color: "white", 
   
};

  
    let finalJSX=(
    <div  style = {imageStyle}>
      <br/>
       <TableContainer component={Paper} style={{width:'1000px',marginLeft:'10%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{backgroundColor:'lightblue'}}>
        <TableHead>
          <TableRow>
            <TableCell>EMPLOYEE NAME</TableCell>
            <TableCell align="right">EMPLOYEE ID</TableCell>
            <TableCell align="right">DESIGNATION</TableCell>
            <TableCell align="right">LOCATION</TableCell>
            <TableCell align="right">SALARY</TableCell>
            <TableCell align="right">USERNAME</TableCell>
            <TableCell align="right">PASSWORD</TableCell>
            <TableCell align="right">DELETE</TableCell>
            <TableCell align="right">EDIT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {view.map((val) => (
            <TableRow
              key={val.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {val.Name}</TableCell>
              <TableCell align="right">{val.ID}</TableCell>
              <TableCell align="right">{val.Position}</TableCell>
              <TableCell align="right">{val.Location}</TableCell>
              <TableCell align="right">{val.Salary}</TableCell>
              <TableCell align="right">{val.Username}</TableCell>
              <TableCell align="right">{val.Password}</TableCell>
              <TableCell align="right">
    <Icon
    name="delete"
    tooltip="delete"
    theme="light"
    size="medium"
    onClick={()=>deleteemp(val._id)}
    
  />        </TableCell>
              <TableCell align="right">
    <Icon
    name="edit"
    tooltip="Edit"
    theme="light"
    size="medium"
    onClick={()=>{updateemp(val)}}
    
  />      </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <br/>
    <br></br>
    </div>)
    if(up)
      finalJSX=<Addemp method="put" data= {singleVal}/>
    
    return (
      finalJSX
  );
};

export default Admin