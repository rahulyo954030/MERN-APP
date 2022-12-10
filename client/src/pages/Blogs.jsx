import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

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
  const [filtered, setFiltered] = useState("")
  const [pageNumber, setPageNumber] = useState(0);
  const [total_Pages, settotal_Pages] = useState(0);

  const pages = new Array(total_Pages).fill(null).map((v,i)=>i)

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
  },[pageNumber])

  const  getBlogFunction=()=>{
    axios.get(`http://localhost:8080/blog?page=${pageNumber}`)
    .then((res)=>{
      setGetdata(res.data.blog)
      settotal_Pages(res.data.totalPages)
      console.log(res.data)
    })
    .catch(err =>console.log(err))
  }


  function filtervalue(e) {
    axios
      .get(`http://localhost:8080/blog?catagory_like=${e.target.value}`)
      .then((res) => {
        setGetdata(res.data);

        setFiltered(e.target.value);
        console.log(res.data)
        // getBlogFunction()
      })
      .catch((e) => console.log(e));
  }
  useEffect(() => {
    
  }, [filtered]);

  const gotoPrevious =()=>{
    setPageNumber(Math.max(0,pageNumber-1))
  }
  const gotoNext =()=>{
    setPageNumber(Math.min(total_Pages-1,pageNumber+1))
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
      <div className='blog_sort_filter_container'>
        {/* filter */}
      <select onChange={filtervalue}>
            <option>Filter by Category</option>
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

        {/* Search bar */}
        <input type="text" placeholder='Search by title...' />

          {/* Sort by title */}
        <select>
            <option>Sort by Title</option>
            <option value="A-Z">A - Z</option>
            <option value="Z-A">Z - A</option>
            
        </select>
      </div>
      <Feeds getdata={getdata}/>
      <div>
        Page : {pageNumber+1}
      </div>
      <div>
        <button onClick={gotoPrevious} >Previous</button>
        {pages.map((pageIndex,i)=>(
          <button key={i} onClick={()=>setPageNumber(pageIndex)}>
            {pageIndex+1}
          </button>
        ))}
        <button onClick={gotoNext}>Next</button>
      </div>
    </div>
  )
}

export default Blogs