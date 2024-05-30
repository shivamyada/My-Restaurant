import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'
import {
  
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Layout>
        <Box>
          <Typography  sx={{textAlign:"center", pt:4 , fontSize:"30px", color:'red'}}>
            Welcome MY Resturant
          </Typography>
          <Typography variant="subtitle2" sx={{marginLeft:"20px", marginRight:"20px", mt:4}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora neque totam cupiditate nobis quae, quidem, quam dolorem laboriosam dolorum blanditiis voluptatum ea. Explicabo quas fugiat amet dolorem aut hic voluptate suscipit deleniti exercitationem aperiam ut eligendi laboriosam quaerat quam quia nisi, soluta numquam eum tempore repellendus pariatur eos laborum neque. Dicta eos, corporis laudantium quae beatae vel placeat cupiditate?
          </Typography>
        </Box>
        <Box>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};
        

export default Contact