import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom'
import axios from "axios"

let initialData = {
    email: "",
    password: "",
  };
const Pvtroute = ({children}) => {
   
    const [data, setData] = useState(initialData);


    useEffect(() => {
      getupdateddate();
    });
    const getupdateddate =() => {
      axios
        .get(`http://localhost:8080/auth/logout`)
        .then(res => {
          setData(res.data);
          console.log("logout",res.data);
          
        })
        .catch((e) => console.log(e));
    };
  
    console.log(data)
    if(data[0]){
        return children
    }
  return <Navigate to="/login"/>

  
}

export default Pvtroute