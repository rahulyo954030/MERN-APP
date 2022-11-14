import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Feeds = () => {
    const [data,setData] =useState({})

    useEffect(()=>{
        getdata()
    },[])
    const getdata =()=>{
        axios.get("http://localhost:8080/blog")
    .then((res)=>{
        setData(res.data)
        console.log(res.data)
    })
    .catch((e) => console.log(e))
    }
   
    

  return (
    <div>
        <div>
            <h2>Your Feeds...!</h2>
        </div>
        <div>
            {/* {data.map((e,i)=>(
                <div key={e[0]._id}>
                    <img src={e[0].image} alt="" />
                    <h2>{e[0].title}</h2>
                    <h4>{e[0].catagory}</h4>
                    <p>{e[0].description}</p>
                </div>
            ))} */}
          
        </div>
    </div>
  )
}

export default Feeds