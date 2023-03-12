import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import WorksList from "./WorksList";
import WorksData from "./WorksList.js";
import Navbar from "./Navbar"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Home</h1>
        <Navbar />
        {/* <WorksList /> */}
      </div>
      <div>{/* {WorksData} */}</div>
    </main>
  );
}
