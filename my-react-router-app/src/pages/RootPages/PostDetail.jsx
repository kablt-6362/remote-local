import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// 주소에 있는 경로 파라미터를 불러오는 훅
// posts/:postId -> :postId 부분이 경로 파라미터
import { useParams } from "react-router-dom";

export default function PostDetail() {
  // 경로 파라미터 값 불러오기
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPost() {
      const response = await axios(`https://dummyjson.com/posts/${postId}`);
      setPost(response.data);
      console.log(response.data);
    }
    getPost();
  }, [postId]);

  return (
    <div>
      <p>제목-{post.title}</p>
      <p>내용</p>
      <div>{post.body}</div>
    </div>
  );
}
//내꺼
