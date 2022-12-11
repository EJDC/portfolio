import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";

const MainContainer = () => {
  const [selectedSection, setSelectedSection] = useState("")

  const onSectionSelected = function(section) {
    setSelectedSection(section)
  }

  return (
    <>
      <section><NavBar /></section>
      <section><About/></section>
      <section><Skills /></section>
      <section><Portfolio /></section>
    </>
  );
};

export default MainContainer;
