"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
// import styles from "./Navbar.module.css";
import styles from "@/styles/Navbar.module.css";
// import styles from "/Users/ceridwenrobertsWork/portfolio_next/styles/Navbar.module.css";

import { Montserrat, Montserrat_Alternates } from "next/font/google";
// import { works } from "../api/hello/worksData.js";

const montserrat = Montserrat({ subsets: ["latin"] });

const links = [
  { label: "work", path: "/work", targetSegment: "work" },
  { label: "about", path: "/about", targetSegment: "about" },
  { label: "contact", path: "/contact", targetSegment: "contact" },
];

export default function Navbar() {
  const activeSegment = useSelectedLayoutSegment();
  const pathname = usePathname();

  if (activeSegment === null) {
    links.filter((l) => links.label === "home");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        {links.map((l, i) => {
          // console.log({l});
          return (
            <Link
              className={
                activeSegment === l.targetSegment
                  ? styles.isActive
                  : styles.notActive
              }
              style={{
                padding: "0.5rem",
              }}
              key={i}
              href={l.path}
            >
              <p className={montserrat.className}>{l.label}</p>
              {/* {i} */}
              {l.key}
            </Link>
          );
        })}
      </div>
    </>
  );
}
