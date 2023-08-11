import { NameIcon } from "../components/NameIcon";
import Navbar from "../Navbar";
import Navi from "../Navi";

import Header from "@/app/components/Header";

export default function SubdirLayout({ children }) {
  return (
    <>
      <div>
        <Header />
      </div>
      {children}
    </>
  );
}
