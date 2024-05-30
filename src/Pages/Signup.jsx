import React from "react";
import Layout from "../components/Layout";
import { TextField, Typography, Box, Button, Link } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handle1 = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handle2 = (e) => {
    setPassword(e.target.value);
  };
  const submit = () => {          // we can use the props the m
    const state = {
      email,
      password,
    };
    // console.log("=====singUp", email, password);
    navigate("/login", { state });
  };
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  }, [email, password]);

  // useEffect(() => {
  //   localStorage.setItem("password", JSON.stringify(password));
  // }, [password]);

 // const data = JSON.stringify(localStorage.getItem("email"));
  // console.log(data);

  return (
    <Layout>
      <Box
        sx={{
          height: "400px",
          width: "400px",
          border: "1px solid red",
          position: "relative",
          left: "25%",
          backgroundColor: "brown",
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

          <Box>
            <Button
              sx={{ mt: "30px", border: "2px solid red", width: "200px" }}
              onClick={submit}
            >
              sign up
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ mt: "20px", ml: "90px" }}>
            already have account ?<Link href={"/login"}> login</Link>
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Signup;
