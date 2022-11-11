import React from "react";
import "../styles/Navbar_footer.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useCookies } from 'react-cookie';




const Navbar = () => {
  const navigate = useNavigate();
  
  const [cookies, setCookie, removeCookie] = useCookies();


 


  const logoutFunction = (e) => {
    removeCookie("Name")
    navigate("/login")
    }
  
    
  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/home")}>HOME</h3>
      <h3 onClick={() => navigate("/blogs")}>BLOGS</h3>
      <h3 onClick={() => navigate("/products")}>PRODUCTS</h3>
      <h3 onClick={() => navigate("/cart")}>CART</h3>
      {<>
        {cookies.Name?<h3 onClick={()=>logoutFunction()}>LOGOUT</h3>:
        <h3 onClick={() => navigate("/login")}>LOGIN</h3>
      }
      </>
      }
    </div>
  );
};

export default Navbar;
