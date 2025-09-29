import React from "react";

export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>이름:{props.name}</h1>
      <h2>나이:{props.age}</h2>
    </div>
  );
}
