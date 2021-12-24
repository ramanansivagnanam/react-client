import React, { useState } from "react";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Posts.css";
export default function Posts() {
  const [title, updateTitle] = useState('');
  const handleChange = (event) => {
    updateTitle(event.target.value);
  };

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:4000/createpost`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({title})
    });
    if(res.ok){
         toast.success("Post create sucecessfully");
         updateTitle('');
    } else {
        toast.error("Some error occurred");
    }
    
  }

  return (
    <div className="post-container">
      <div className="title">
        <h3>Posts</h3>
      </div>
      <div className="inputContainer">
        <label className="">Post :</label>
        <textarea
          value={title}
          onChange={handleChange}
          className="textAreaPosts"
        />
      </div>
      <div className="btnPrimary" onClick={handleSubmit}>
        ADD POST
      </div>
      <ToastContainer />
    </div>
  );
}
