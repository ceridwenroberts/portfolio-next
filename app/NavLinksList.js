use client

import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./Navbar.module.css";
import { Montserrat, Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const NavLinksList = (props) => {
  const links = props.links;
  // console.log("props:", props);
  const activeSegment = useSelectedLayoutSegment();
  // console.log(props, links);
  return (
    <div className="navLinksList">
      {links.map((l, i) => (
        <Link
          className={
            activeSegment === l.targetSegment
              ? styles.isActive
              : styles.notActive
          }
          style={{
            textDecoration:
              activeSegment === l.targetSegment ? "underline" : "none",
            padding: "0.5rem",
          }}
          key={i}
          href={l.path}
        >
          <p className={montserrat.className}>{l.label}</p>
          {i}
          {l.key}
        </Link>
      ))}
    </div>
  );
};

export default NavLinksList;
