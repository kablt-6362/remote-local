import React from "react";
import Rule from "./components/JSX/Rule";
import Interpolation from "./components/JSX/Interpolation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyButton from "./components/Components/MyButton";
import MyList from "./components/Components/MyList";
import OnClick from "./components/EventHandling/OnClick";
import OnChange from "./components/EventHandling/OnChange";
import OnSubmit from "./components/EventHandling/OnSubmit";

export default function App() {
  return (
    <div>
      <OnClick></OnClick>
      {/* <OnSubmit></OnSubmit> */}
    </div>
  );
}
