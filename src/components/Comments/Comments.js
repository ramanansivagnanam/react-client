import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Posts/Posts.css";
import CommentsList from "./CommentsList";
export default function Comments({postId}) {
  const [comment, updateComment] = useState("");
  const handleChange = (event) => {
    updateComment(event.target.value);
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:5000/posts/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    if (res.ok) {
      toast.success("Comment created sucecessfully");
      updateComment("");
    } else {
      toast.error("Some error occurred");
    }
  };

  return (
    <div className="post-container">
      <CommentsList id={postId} />
      <div className="title">
        <h3>Comment</h3>
      </div>
      <div className="inputContainer">
        <label className="">Comment :</label>
        <textarea
          value={comment}
          onChange={handleChange}
          className="textAreaPosts"
        />
      </div>
      <div className="btnPrimary" onClick={handleSubmit}>
        Add Comment
      </div>
      <ToastContainer />
    </div>
  );
}
