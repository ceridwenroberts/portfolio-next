import Image from "next/image";
import { montserrat, montserrat_alt, brightYoungThings } from "@/styles/fonts";
import styles from "./page.module.css";
import { HomeMenu } from "../components/HomeMenu";
import { NameIcon } from "../components/NameIcon";

export default function Home() {
  return (
    <main
      className={`${styles.main}`}
    >
      <div
        style={{
          // outline: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <NameIcon />
        <HomeMenu />
      </div>
    </main>
  );
}
