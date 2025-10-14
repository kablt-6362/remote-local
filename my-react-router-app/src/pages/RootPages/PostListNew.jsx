import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostDetail from "./PostDetail";
import { Link } from "react-router-dom";
// usesearchparams 훅 불러오기
// 쿼리 파라미터 관리
import { useSearchParams } from "react-router-dom";

export default function PostListNew() {
  // srarchParams: 쿼리 파라미터 값을 가진 객체
  // setSearchParams: 쿼리 파라미터 값을 변경하는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  const [posts, setPosts] = useState([]);

  // usseEffect의 의존성 배열의 역할
  // useEffect 콜백 함수를 언제 실행할것이냐를 결정
  // 의존성 배열이 빈 배열리면 컴포넌트가 첫 랜더링될 떄 콜백 함수 실행
  // 의존성 배열에 데이터ㅏ 있으면 해당 데이터가 변경될 떄 콜백 함수 실행
  useEffect(() => {
    // 쿼리 파라미터 중 key가 order인거 불러오기
    // Nullish연산자를 통해 기본값을 지정
    const sortBy = searchParams.get("sortBy") ?? "id";
    const order = searchParams.get("order") ?? "asc";
    console.log(order);
    console.log(sortBy);
    async function getPost() {
      const res = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      const data = res.data.posts;
      setPosts(data);
    }
    getPost();
<<<<<<< HEAD
  }, []);
  return (
    <div>
      <div className="flex gap-2">
        <button className="p-2 border-2 cursor-pointer ">Id 오름차순</button>
        <button className="p-2 border-2 cursor-pointer">Id 내림차순</button>
=======
  }, [searchParams]);
  // 의존성 배열에 searchParams을 넣어
  // 쿼리파라미터가 변경되면 useEffect 콜백 함수를 실행한다
  // 쿼리 파라미터가 변경된다 ->setSearchParams()실행

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="p-2 border-2 cursor-pointer "
          onClick={() => {
            // id를 기준(sortBy)으로 오름(asc) 차순(order)
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          Id 오름차순
        </button>
        <button
          className="p-2 border-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          Id 내림차순
        </button>
>>>>>>> aa79189e334ae7063ca98f550c5e5bceb3e3b6c3
      </div>
      {posts.map((post) => {
        return (
          <Link key={post.id} to={`/posts/${post.id}`}>
            No.{post.id} - {post.title}
            <br />
          </Link>
        );
      })}
    </div>
  );
}
