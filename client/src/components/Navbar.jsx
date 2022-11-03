import React from 'react'
import "../styles/Navbar.css"
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
        <h3 onClick={()=>navigate("/")} >HOME</h3>
        <h3 onClick={()=>navigate("/blogs")} >BLOGS</h3>
        <h3 onClick={()=>navigate("/products")} >PRODUCTS</h3>
        <h3 onClick={()=>navigate("/cart")} >CART</h3>
        <h3 onClick={()=>navigate("/login")} >LOGIN</h3>
        <h3 onClick={()=>navigate("/signup")} >SIGNUP</h3>
    </div>
  )
}

export default Navbar