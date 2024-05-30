import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "./../styles/Header.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import Badge from "@mui/material/Badge";

const Header = ({}) => {
  const [mobileopen, setMobileopen] = useState(false);
  const [cart, setCart] = useState([]);

  const handler = () => {
    setMobileopen(!mobileopen);
  };

  const tap=()=>{
    
  }
  const drawer = (
    <Box onClick={handler} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: "1", color: "goldenrod" }}
      >
        <FastfoodIcon />
        My Resturant
      </Typography>
      <Divider />
      <ul className="mnavigate">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handler}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: "1", color: "goldenrod" }}
            >
              <FastfoodIcon />
              My Resturant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigate">
                <li>
                  <Link onClick={tap} to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <Badge badgeContent= {cart.length.toLocaleString()}  color="primary">
                      <FoodBankIcon sx={{ bgcolor: "white" }} color="action" />
                    </Badge>
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handler}
            sx={{
              display: { sx: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
