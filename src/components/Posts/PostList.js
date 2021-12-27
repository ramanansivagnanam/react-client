import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/actions/Actions";
import "./PostList.css";
import PostListItem from "./PostListItem";
export default function PostList() {
  const { posts }  = useSelector((state)=> ({
     posts: state.post.posts
  }));  
  const disPatch = useDispatch();

  const getPostsFromAPI = () => {
    disPatch(getPosts());
  }

  useEffect(() => {
    getPostsFromAPI();
  },[]);

  return (
    <div className="post-list-container">
      {posts && posts.map((post) => (
        <PostListItem key={post.id} id={post.id} title={post.title} />
      ))}
    </div>
  );
}
