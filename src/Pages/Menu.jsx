import React from "react";
import Layout from "../components/Layout";
import { menuList } from "../components/Data";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  MenuList,
  Typography,
} from "@mui/material";
const Menu = ({ menu }) => {
  const [cart, setCart] = useState("");
  //const [count, setCount] = useState(0);
  //
  //
  //

  const handleAddToCart = (menu) => {
  
      setCart([...cart, menu]);
      console.log(menu);
     
    
  };
  // const handleAddToCart = (product) => {
  //   console.log("addHere", product);
  //   addToCart(product);
  // };
  console.log("===count==>");
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menuList.map((menu) => (
          <Card
            sx={{ maxWidth: "190px", display: "flex", m: 2 }}
            key={menu?.id}
          >
            <CardActionArea>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => handleAddToCart(menu)}
                  sx={{
                    color: "yellowgreen",
                    bgcolor: "black",
                    position: "absolute",
                  }}
                >
                  add to cart
                </Button>
              </Box>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    border: "2px solid red",
                    width: "100px",
                    paddingLeft: "30px",
                    background: "black",
                    color: "white",
                  }}
                >
                  {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
