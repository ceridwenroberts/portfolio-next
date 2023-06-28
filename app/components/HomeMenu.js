"use client";

import React from "react";
import Link from "next/link";
import styles from "app/HomeMenu.module.css";
import localFont from "@next/font/local";
// import test from "@/fonts/bright-young-things-cufonfonts-webfont/BrightYoungThings.woff";

// const brightFont = localFont({
//   src: "fonts/brightYoungThingsWebfont/BrightYoungThings.woff",
// });

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
        <Link href="./about" className={`${styles.linkText} ${styles.about}`}>
          about
        </Link>
        <Link
          href="./work"
          className={`${styles.linkText} ${styles.work}`}
        >
          Work
        </Link>
        <Link
          href="./contact"
          className={`${styles.linkText} ${styles.contact}`}
        >
          Contact
        </Link>
      </div>
    </>
  );
};
