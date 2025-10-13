import React from "react";
import axios from "axios";
import { useStat, useEffect } from "react";
import PostDetail from "./PostDetail";
import { Link } from "react-router-dom";

export default function PostListNew() {
  const [posts, setPosts] = useStat([]);
  useEffect(() => {
    async function getPost() {
      const res = await axios.get("https://dummyjson.com/posts");
      const data = res.data.posts;
      setPosts(data);
    }
    getPost();
  });
  return (
    <div>
      {posts.map((post) => {
        const addres = "/posts" + post.id;
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            No.{post.id}
          </Link>
        );
      })}
    </div>
  );
}
