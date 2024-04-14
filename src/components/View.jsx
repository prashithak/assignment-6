import React, { useEffect, useState } from 'react';
import{TableContainer,Table,TableHead,TableCell,Paper,TableBody,TableRow}from '@mui/material'
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';


const View = () => {

const[view,setView]=useState([]);
useEffect(()=>{

  axiosInstance.get("http://localhost:3005/api/view").then((res)=>{
setView(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })

},[])



  let imageStyle = {
    height: "100%",
   //  width: "500px",
     backgroundImage:
     'url("https://st.depositphotos.com/1001069/1259/i/450/depositphotos_12595238-stock-photo-nature-blurred-bokeh-background.jpg")',
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
     color: "white", 
     
  };
  return (
    <div  style = {imageStyle}>
      <br/>
       <TableContainer component={Paper} style={{width:'800px',marginLeft:'20%'}}>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    <br/>
    <br></br>
    </div>
  )
}

export default View