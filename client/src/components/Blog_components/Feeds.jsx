import React from 'react'
import { useState } from 'react';
import "../../styles/Blog.css"

const Feeds = (props) => {
   
  return (
    <div className='feed_container'>
          {props.getdata.map((e)=>(
              <div key={e._id} className="feed_map_card">
                <h1>{e.title}</h1>
                <img src={e.image} alt="blog image" />
                <h3>{e.catagory}</h3>
                <p>{e.body}</p>
                <div className='Blog_delete_edit_buttons_container' >
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            ))
          }
          
          
      </div>
  )
}

export default Feeds