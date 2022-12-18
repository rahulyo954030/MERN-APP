import React from 'react'

import "../../styles/Blog.css"

const Feeds = (props) => {
  const {getdata,searchTerm} = props
   console.log("dsd",getdata);
  return (
    <div className='feed_container'>
          {props.getdata.filter((val) => {
              if (props.searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(props.searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((e)=>{
             return(
              <div key={e._id} className="feed_map_card">
                <h1>{e.title}</h1>
               
                <img src={e.image} alt="blog image" />
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