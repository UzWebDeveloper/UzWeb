import React, { useEffect, useState } from "react";
import axios from "axios"


const Blog = () =>{

  const [blogs, setBlog] = useState([]);

  useEffect(()=>{
     loadBlog(); 
  }, []);

  const loadBlog = async () => {
    const result = await axios.get("http://localhost:3001/blogs");
    setBlog(result.data.reverse());
  };

  
  
    return (
      <div className="section-four">
        <div className="continer">
          <div className="title">
            <h2>My Blogs</h2>
          </div>
          <div>
          {blogs.map((blogs) => (
            <div className="card" key={blogs.id}>
              <p className="cardTitle">{blogs.title}</p>
              <p className="cardBody">{blogs.body}</p>
              <img src={blogs.img}/>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  
}

export default Blog;


// <div className="btns">
// <Link className="btn btn-edit" to={`/edit/${blog.id}`}>
//   Edit
// </Link>
// <Link
//   className="btn btn-delete"
//   onClick={() => deletePost(blog.id)}
// >
//   Delete
// </Link>
// </div>

//  {this.state.blogs.length > 0 ?
//             this.state.blogs.map((blogs) => (
//               <div className="card" key={blogs.id} onClick={() => this.click(blogs.id)}
//               >
//                 <p className="cardTitle">{blogs.title}</p>
//                 <p className="cardBody">{blogs.body}</p>
//               </div>
//             )) : <div>Loading ....</div>}


