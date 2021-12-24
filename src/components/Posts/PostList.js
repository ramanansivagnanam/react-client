import React, { useEffect, useState } from "react";
import "./PostList.css";
import PostListItem from "./PostListItem";
export default function PostList() {
  const [posts, updatePosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch(`http://localhost:4000/posts`);
    const data = await res.json();
    updatePosts(data);
  };

  useEffect(() => {
    getPosts();
  },[]);

  return (
    <div className="post-list-container">
      {posts.map((post) => (
        <PostListItem key={post.id} id={post.id} title={post.title} />
      ))}
    </div>
  );
}
