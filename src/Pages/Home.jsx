import React from "react";
import Layout from "../components/Layout";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import banner from '../images/banner.jpg'
import './../styles/Home.css'
const Home = () => {
  return (
    <Layout>
      <Box  className="home" sx={{backgroundImage:`url(${banner})`}} >
        <Box   sx={{ml:2, width:'auto'}}>
          <Typography  sx={{fontSize:"80px" }} className="head">food Website</Typography>
          <Typography sx={{mt:"15px",p:0, fontWeight:"bold", color:'black', fontSize:"40px"}} varient="subtitle1">Best food In India</Typography>
          <Link to="/menu">
            <Button sx={{color:"white", marginTop:"20px", border:"none", borderRadius:"5px" ,cursor:"pointer", backgroundColor:"black" ,'&:hover':{backgroundColor:"red"}}}>ORDER NOW</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
