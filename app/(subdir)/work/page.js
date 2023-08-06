import React from "react";
import WorksList from "../../WorksList";
import WorksGrid from "@/app/components/WorksGrid";
import Navbar from "@/app/Navbar";

export default function WorkPage() {
  return (
    <>
      <h1>Work</h1>
      {/* <WorksList /> */}
      <WorksGrid />
    </>
  );
}
