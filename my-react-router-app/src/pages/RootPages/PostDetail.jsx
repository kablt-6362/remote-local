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

  useEffect(() => {
    console.log(postId);
  }, [postId]);

  return <div>postDetail</div>;
}
