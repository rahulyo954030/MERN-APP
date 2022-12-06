import React from 'react'
import { useState } from 'react';

const Feeds = (props) => {
   
  return (
    <div className='feed_container'>
          {props.getdata.map((e)=>(
              <div key={e._id} className="feed_map_card">
                <h1>{e.title}</h1>
                <img src={e.image} alt="blog image" />
                <h3>{e.catagory}</h3>
                <p>{e.body}</p>
              </div>
            ))
          }
          
          
      </div>
  )
}

export default Feeds