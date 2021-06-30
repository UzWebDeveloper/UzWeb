import React, { useState } from 'react';
import axios from "axios";



const AddBlogs = () => {
  
  

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let blogs = {id: Date.now(), title: title, body: body};
    axios.post(`http://localhost:3001/blogs`, blogs)
    .then(res => {
      console.log(res);
    });
    
  }

    return (
      <div>
      <form onSubmit={(e) => onSubmit(e)}>
      <div className="form-card">
        <input
          type="text"
          placeholder="Enter Your Post Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-card">
        <input
          type="text"
          placeholder="Enter Your Post Body"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button className=" form-card__btn">Add Post</button>
    </form>
      </div>
    )
  }


export default AddBlogs
