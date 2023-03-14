
import React, { useState } from "react";
import Navbar from "./Navi";
import styles from "./Navbar.module.css";

const NavList = (props) => {
  const links = props.links;
  const title = props.path;
  console.log(props, links);
  return (
  
    <div className="links-list">
        {props.boldTarget}
      {links.map((item) => (
        <div key={item.label} style={{textDecoration: "underline", padding: "1rem"}}>{item.label}
        <p><strong>{item.targetSegment}</strong></p>
        <p><i>{item.title}</i></p>
        </div>
        
      ))}
    </div>
  );
};

export default NavList;
