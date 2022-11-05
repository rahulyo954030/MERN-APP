import React from "react";
import "../styles/Navbar_footer.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

let initialData = {
  email: "",
  password: "",
};

const Navbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(initialData);

  useEffect(() => {
    getupdateddate();
  }, []);
  const getupdateddate =() => {
    axios
      .get(`http://localhost:8080/auth/logout`)
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  };

  const logoutFunction = () => {

    for(let i =0; i<data.length; i++){
      data.splice(i,1);
    }
    
    // navigate("/");
  };
  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/home")}>HOME</h3>
      <h3 onClick={() => navigate("/blogs")}>BLOGS</h3>
      <h3 onClick={() => navigate("/products")}>PRODUCTS</h3>
      <h3 onClick={() => navigate("/cart")}>CART</h3>
      <h3 onClick={() => navigate("/login")}>LOGIN</h3>
      <h3 onClick={() => navigate("/")}>SIGNUP</h3>
      <h3 onClick={logoutFunction}>LOGOUT</h3>
    </div>
  );
};

export default Navbar;
