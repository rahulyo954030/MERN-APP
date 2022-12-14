import React from 'react'
import { useState } from 'react';
import "../../styles/Blog.css"

const Feeds = (props) => {
  
   console.log(props);
  return (
    <div className='feed_container'>
          {props.getdata.map((e)=>{
             var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(e.image)))
             return(
              <div key={e._id} className="feed_map_card">
                <h1>{e.title}</h1>
               
                <img src={`data:image/png;base64,${base64String}`} alt="blog image" />
                <h3>{e.category}</h3>
                <p>{e.description}</p>
                <div className='Blog_delete_edit_buttons_container' >
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
              )
})
          }
          
          
      </div>
  )
}

export default Feeds