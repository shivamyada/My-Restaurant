import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



const Footer = () => {
  return (
    <>
    <Box  sx={{textAlign:"center", bgcolor:"black" ,color:"white",p:"2"}}>
        <Box  sx={{my:"3", "& svg" :{
            fontSize:"60px",
            margin:2
        },"& svg:hover":{
            color:"goldenrod",
            transform:'translateX(5px)'
        }}}>
            <InstagramIcon/>
            <LinkedInIcon/>
            <GitHubIcon />

        </Box>
        <Typography variant="h5" sx={{'@media(max-width:600px':{
            fontSize:'1rem'
        }}}>
            All Right Reserved &copy ; Techinfo YT
        </Typography>


    </Box>
    
    
    
    
    </>
  )
}

export default Footer