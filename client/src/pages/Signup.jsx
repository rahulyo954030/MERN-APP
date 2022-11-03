import React from 'react'
import { useState } from 'react'

let initialData = {
    username :"",
    email: "",
    password: ""
}
const Signup = () => {
   const [data,setData] = useState(initialData)


  return (
    <div>
        <form>
            <input type="text" placeholder='Enter Username' name='username' onChange={changeHandler}/>
            <br />
            <input type="text" placeholder='Enter Email' name='email' onChange={changeHandler} />
            <br />
            <input type="text" placeholder='Enter Password' name='password' onChange={changeHandler} />
            <br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup