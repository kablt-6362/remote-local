import React from "react";

export default function Profile(props) {
  console.log(props);
  return (
    <div>
      저는 {props.userNew.name}이고, {props.user.age}세 이며, 관리자 여부는{" "}
      {props.user.isAdmin}
      입니다.
    </div>
  );
}
