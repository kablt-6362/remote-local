import React from "react";
import { useState } from "react";

export default function Form() {
  // 입력 요소를 객체로 관리할 상태
  const [form, setForm] = useState({
    username: "",
    age: 0,
    email: "",
  });

  // 입력 요소 값을 관리할 3개의 상태
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState(0);
  // const [email, setEmail] = useState("");

  // event 객체: 발생한 이벤트의 정보를 속성으로 저정한 객체
  function handleChange(event) {
    const target = event["target"];

    // target 에서 name속성과 value속성을 꺼내서 출력
    const { name, value } = target;
    console.log(name, value);

    // if (name === "username") {
    //   setUsername(value);
    // } else if (name === "age") {
    //   setAge(value);
    // } else if (name === "email") {
    //   setEmail(value);
    // }

    //form 객체 상태
    //{username:"",age:0,email:""}
    //계산된 속성명을 사용해서 속성명(key)를 변수 name로 대체
    const newForm = { ...form, [name]: value };
    console.log(newForm);
    setForm(newForm);
  }

  return (
    <div>
      <form action="">
        {/* 3개의 input 요소의 값을 상태로 관리 */}
        {/* input 요소의 value 속성은 사용자가 입력한 값 */}
        <input
          type="text"
          name="username"
          value={form.username}
          className="border-2"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="number"
          name="age"
          value={form.age}
          className="border-2"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          className="border-2"
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </form>
    </div>
  );
}
