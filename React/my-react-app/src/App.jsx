import React from "react";
import Container from "./components/State/Container";
import StringState from "./components/State/StringState";
import NumberState from "./components/State/NumberState";
import ObjectState from "./components/State/ObjectState";
import Objv2 from "./components/State/Objv2";
import ArrayState from "./components/State/ArrayState";
export default function App() {
  return (
    <div>
      <StringState></StringState>
      <NumberState></NumberState>
      <ObjectState></ObjectState>
      <Objv2></Objv2>
      <ArrayState></ArrayState>
    </div>
  );
}
