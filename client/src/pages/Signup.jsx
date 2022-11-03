import React from 'react'
import { useState } from 'react'

let initialData = {
    username :"",
    email: "",
    password: ""
}
const Signup = () => {
   const [data,setData] = useState(initialData)

   const handleChange=()=>{

   }

  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Username' name='username' onChange={handleChange}/>
            <br />
            <input type="text" placeholder='Enter Email' name='email' onChange={handleChange} />
            <br />
            <input type="text" placeholder='Enter Password' name='password' onChange={handleChange} />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup