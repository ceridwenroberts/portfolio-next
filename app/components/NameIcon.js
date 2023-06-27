"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NameIcon = () => {
  let activeLink = "";
  const pathname = usePathname();

pathname != "./" ?? activeLink === "./"

// console.log({activeLink});

  return (
    <>
    <Link href={activeLink}>
      <div>Ceridwen Roberts</div>
      <div>
        <p>creative -- developer</p>
      </div>
      </Link>
    </>
  );
};
