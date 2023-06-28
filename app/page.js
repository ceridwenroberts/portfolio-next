import Image from "next/image";
import { montserrat, montserrat_alt, brightYoungThings } from "@/styles/fonts";
import styles from "./page.module.css";
import { HomeMenu } from "./components/HomeMenu";
import { NameIcon } from "./components/NameIcon";


export default function Home() {
  return (
    <main
      className={`${styles.main}`}
      styles={{
        display: "flex",
      }}>
      <div>
        <NameIcon styles={{ padding: "18px" }} />
        <HomeMenu />
      </div>
    </main>
  );
}
