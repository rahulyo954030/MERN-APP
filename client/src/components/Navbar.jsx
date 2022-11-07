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
  });
  const getupdateddate =() => {
    axios
      .get(`http://localhost:8080/auth/logout`)
      .then(res => {
        setData(res.data);
        // console.log(res.data);
        
      })
      .catch((e) => console.log(e));
  };

  const logoutFunction = (e) => {
    
    axios
    .delete(
      `http://localhost:8080/auth/logout/${e._id}`
    )
    .then((res) => {
      getupdateddate();
      console.log("deleted", res)
      navigate("/login")
    })
    .catch((err) => console.log(err));
    
    }
  
    
  return (
    <div className="navbar">
      <h3 onClick={() => navigate("/home")}>HOME</h3>
      <h3 onClick={() => navigate("/blogs")}>BLOGS</h3>
      <h3 onClick={() => navigate("/products")}>PRODUCTS</h3>
      <h3 onClick={() => navigate("/cart")}>CART</h3>
      {<>
        {!data[0]?(<h3 onClick={() => navigate("/login")}>LOGIN</h3>):
      (<h3 onClick={()=>logoutFunction(data[0])}>LOGOUT :{data[0].email}</h3>)}
      </>
      }
    </div>
  );
};

export default Navbar;
