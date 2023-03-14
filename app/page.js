"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import WorksList from "./WorksList";
import WorksData from "./WorksList.js";
import Navbar from "./Navbar";
// import NavberSec from "./NavbarSec"
import NavList from "./NavList";
import Navi from "./Navi";
import { NavHome } from "./NavHome";
import { NameIcon } from "./NameIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <NameIcon />
        <NavHome />
        {/* <WorksList /> */}
      </div>
    </main>
  );
}
