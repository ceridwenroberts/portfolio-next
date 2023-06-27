import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { HomeMenu } from "./components/HomeMenu";
import { NameIcon } from "./components/NameIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.outline}>
        <NameIcon />
        <HomeMenu />
      </div>
    </main>
  );
}
