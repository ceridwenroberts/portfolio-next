"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelectedLayoutSegment } from "next/navigation";
import styles from "./Navbar.module.css";
import { Montserrat, Montserrat_Alternates } from "@next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] });

const links = [
  // { label: "home", path: "/", targetSegment: "home" },
  { label: "home", path: "/", targetSegment: null },
  { label: "work", path: "/work", targetSegment: "work" },
  { label: "about", path: "/about", targetSegment: "about" },
  { label: "contact", path: "/contact", targetSegment: "contact" },
];



export default function Navbar(props) {
  // console.log("props:", props);
  const activeSegment = useSelectedLayoutSegment();
  const [linksArr, setLinksArr] = useState(links);
  console.log("linksArr after: linksArr");


  if (activeSegment === null) {
    links.filter((l) => links.label === "home");

  }
  console.log("links");
  console.log("links",links);
  return (
    <>
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
    </>
  );
}


  // const [filteredLinks, setFilteredLinks] = useState(links);

  // useEffect(() => {
  //   if (activeSegment === null) {
  //     setFilteredLinks(links.slice(1));
  //   } else {
  //     setFilteredLinks(links);
  //   }
  // }, [activeSegment]);

  // // console.log(links)

  // // console.log("activeSegment", activeSegment)
  //   // links.splice(0, 1);
  //   // console.log(links);
  // const [filteredLinks, setFilteredLinks] = useState(links);