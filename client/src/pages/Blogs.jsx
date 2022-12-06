import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BlogSort from '../components/blog_components/BlogSort'
import Feeds from '../components/blog_components/Feeds'


import "../styles/Blog.css"
let indata ={
  image:"",
  title:"",
  catagory:"",
  description:""
}
const Blogs = () => {
  const [data,setData] = useState(indata)
  const [getdata,setGetdata] = useState([])

  const changeHandler =(e)=>{
    const {name,value} = e.target
    setData({...data, [name]:value})
  }

  const submitHandler =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/blog",data)
    .then((res)=>{
      console.log(res.data)
      setData(indata)
      getBlogFunction()
    })
    .catch(err =>console.log(err))

  }

  useEffect(()=>{
    getBlogFunction()
  },[])

  const  getBlogFunction=()=>{
    axios.get("http://localhost:8080/blog")
    .then((res)=>{
      setGetdata(res.data)
      // console.log(res.data)
    })
    .catch(err =>console.log(err))
  }
  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
      <input type="text" placeholder='Enter image url...' name='image' value={data.image}  onChange={changeHandler} />
      
      <input type="text" placeholder='Enter Title...' name='title' value={data.title}  onChange={changeHandler}/>
      <br />
      <select name="catagory" value={data.catagory} onChange={changeHandler}>
      <option>Choose Catogary...</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Movie">Movie</option>
        <option value="Sports">Sports</option>
        <option value="Game">Game</option>
        <option value="Anime">Anime</option>
        <option value="Adventure">Adventure</option>
        <option value="Action">Action</option>
        <option value="News">News</option>
        <option value="Other">Other</option>
      </select>
      
      <input type="text" placeholder='Enter Description...' name='description' value={data.description} onChange={changeHandler} />
      <br />
      </div>
      <div>
      <input type="submit" value="ADD BLOG" className='addPostButton'/>
      </div>
      </form>

      {/* <---------------------Getting Blogs---------------------> */}
      <BlogSort/>
      <Feeds getdata={getdata}/>
     
    </div>
  )
}

export default Blogs