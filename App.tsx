import "./global.css";
import React from "react";

import { StatusBar } from "react-native";

import { Home } from "./src/screens/";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}
