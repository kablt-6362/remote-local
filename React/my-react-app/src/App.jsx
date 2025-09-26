import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyButton from "./components/Components/MyButton";
import MyList from "./components/Components/MyList";

export default function App() {
  return (
    <div>
      <MyList></MyList>
      <MyButton></MyButton>
    </div>
  );
}
