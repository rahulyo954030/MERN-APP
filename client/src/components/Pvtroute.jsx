import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';


const Pvtroute = ({children}) => {
  const [cookies, setCookie, removeCookie] = useCookies();
 
  // console.log("cookies",cookies.Name)
    if(cookies.Name){
        return children
    }
  return <Navigate to="/login"/>

  
}

export default Pvtroute