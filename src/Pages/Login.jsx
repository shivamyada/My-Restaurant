import React from "react";
import Layout from "../components/Layout";
import { TextField, Typography, Box, Button, Link } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const location = useLocation();
  const checkEmail = location?.state;
  // const checkPassword = location?.data?.password;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("fetchData====>", checkEmail);
  const handle1 = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handle2 = (e) => {
    setPassword(e.target.value);
  };

  // useEffect(() => {
  //   const data = JSON.stringify(localStorage.getItem("email"));
  //   const data2 = JSON.stringify(localStorage.getItem("password"));

  
  // });

  const submit = () => {
    const data = JSON.parse(localStorage.getItem("email"))
    const data2 = JSON.parse(localStorage.getItem("email"))

    if (data === email && data2 === password) {

       navigate("/");  
    } else {
      alert("this is worng something");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          height: "400px",
          width: "400px",
          border: "1px solid red",
          position: "relative",
          left: "25%",
          backgroundColor: "yellowgreen",
        }}
      >
        <Box sx={{ paddingLeft: "100px", pt: "30px" }}>
          <Typography>Email</Typography>
          <TextField
            type="text"
            placeholder="email"
            onChange={handle1}
            value={email}
            sx={{ border: "2px solid red" }}
          />
          <Typography>password</Typography>
          <TextField
            type="password"
            placeholder="email"
            sx={{ border: "2px solid red" }}
            onChange={handle2}
            value={password}
          />

          <Box sx={{ pl: "70px", mt: "10px" }}>
            <Link href="#">Forgot password ?</Link>
          </Box>
          <Box>
            <Button
              sx={{ mt: "30px", border: "2px solid red", width: "200px" }}
              onClick={submit}
            >
              sign in
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ mt: "20px", ml: "70px" }}>
            don't have account ?<Link href={"/signup"}> Create account</Link>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Login;
