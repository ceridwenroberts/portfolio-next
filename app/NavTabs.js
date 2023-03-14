import React from "react";
import Link from "next/link";

const NavTabs = (props) => {
    const tabs = props.tabs;
  return (
    <div className="navTabs">
      {tabs.map((l, i) => (
        <Link
          className={
            activeSegment === l.targetSegment
              ? styles.isActive
              : styles.notActive
          }
          style={{
            textDecoration:
              activeSegment === l.targetSegment ? "underline" : "none",
            padding: "0.5rem",
          }}
          key={l.label}
          href={l.path}
        >
          <p className={montserrat.className}>{l.label}</p>
          {i}
          {l.key}
        </Link>
      ))}
    </div>
  );
}
