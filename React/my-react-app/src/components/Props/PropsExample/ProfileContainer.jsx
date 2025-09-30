import React from "react";
import Profile from "./Profile";
export default function ProfileContainer() {
  const userA = {
    name: "현우",
    age: 22,
    isAdmin: true,
  };
  const userB = {
    name: "유히",
    age: 22,
    isAdmin: false,
  };
  return (
    <div>
      <Profile user={userA} userNew={userB} />
    </div>
  );
}
