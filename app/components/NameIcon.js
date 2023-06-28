"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NameIcon = () => {
  const pathname = usePathname();

  return (
    <>
    <Link href={pathname != "/" ? "./" : ""}>
      <div>Ceridwen Roberts</div>
      <div>
        <p>creative -- developer</p>
      </div>
      </Link>
    </>
  );
};
