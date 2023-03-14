'use client'

import { React, useState } from "react";
import NavLinksList from "./NavLinksList";

const NavbarSec = () => {
  const [links, setLinks] = useState([
{ label: "home", path: "/", targetSegment: null },
    { label: "work", path: "/work", targetSegment: "work" },
    { label: "about", path: "/about", targetSegment: "about" },
    { label: "contact", path: "/contact", targetSegment: "contact" },
  ]);

  return <div className="navbarSec">
<NavLinksList links={links} /> 
  </div>;
};

export default NavbarSec;