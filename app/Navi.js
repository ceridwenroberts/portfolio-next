'use client'

import React, { useState } from "react";
// import NavList from "./NavList";
// import styles from "./Navbar.module.css";

const Navi = () => {
  const [links, setLinks] = useState([
    { label: "home", path: "/", targetSegment: null },
    { label: "work", path: "/work", targetSegment: "work" },
    { label: "about", path: "/about", targetSegment: "about" },
    { label: "contact", path: "/contact", targetSegment: "contact" }
  ]);

  return (
    <>
      <NavList links={links} boldTarget="testtitel" />
      {/* <NavList links={links.filter((link) => link.label !== "home")} boldTarget="HomeNav" /> */}
      
    </>
  );
};

export default Navi;

