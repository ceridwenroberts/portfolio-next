"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/NameIcon.module.css"
import { brightYoungThings, syncopate, montserrat_sub, montserrat_alt } from "@/styles/fonts";
export const NameIcon = () => {
  const pathname = usePathname();

  return (
    <div >
    <Link href={pathname != "/" ? "./" : ""} >
      <div className={brightYoungThings.className} style={{fontSize: "3rem", color: "#faebd7", letterSpacing: "0.2rem", opacity: "40%" }}>Ceridwen Roberts</div>
      <div>
        <p className={syncopate.className} style={{ paddingLeft: "3rem", opacity: "30%"}}>{`creative ><  developer`}</p>
      </div>
      </Link>
    </div>
  );
};
