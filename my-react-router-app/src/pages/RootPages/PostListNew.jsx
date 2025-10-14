import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import { Link } from "react-router-dom";

export default function PostListNew() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPost() {
      const res = await axios.get("https://dummyjson.com/posts");
      const data = res.data.posts;
      setPosts(data);
    }
    getPost();
  }, []);
  return (
    <div>
      <div className="flex gap-2">
        <button className="p-2 border-2 cursor-pointer ">Id 오름차순</button>
        <button className="p-2 border-2 cursor-pointer">Id 내림차순</button>
      </div>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            No.{post.id} - {post.title}
          </Link>
        );
      })}
    </div>
  );
}
