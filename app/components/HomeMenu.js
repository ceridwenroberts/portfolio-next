"use client";

import React from "react";
import Link from "next/link";

import {
  brightYoungThings,
  montserrat,
  montserrat_alt,
  montserrat_sub,
  syncopate,
} from "@/styles/fonts";
import styles from "@/styles/HomeMenu.module.css";

export const HomeMenu = () => {
  return (
    <>
      <div
        style={{
          // background: "red",
          // fontSize: "11vw",
          fontWeight: "400",
          display: "flex",
          flexDirection: "column",
          
        }}
        className={styles.menu}
      >
        <Link
          href="./about"
          className={` ${brightYoungThings.className} ${styles.linkText} ${styles.about}`}
          styles={{ fontWeight: "100" }}
        >
          about
        </Link>
        <Link
          href="./work"
          className={`${brightYoungThings.className} ${styles.linkText} ${styles.work}`}
        >
          work
        </Link>
        <Link
          href="./contact"
          className={`${brightYoungThings.className} ${styles.linkText} ${styles.contact}`}
        >
          Contact
        </Link>
      </div>
    </>
  );
};
