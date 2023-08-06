import { NameIcon } from "../components/NameIcon";
import Navbar from "../Navbar";
import Navi from "../Navi";
// import styles from "app/(subdir)/subdir.module.css";
import styles from "./subdir.module.css"
import Header from "@/app/components/Header";

export default function SubdirLayout({ children }) {
  return (
    <>
      <div className={styles.main}>
        <Header />
      </div>
      {children}
    </>
  );
}
