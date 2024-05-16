"use client";
import React from "react";
import { NavLink } from "@/components";
import { addInitialUserToLocalStorage } from "@/utils/localStorage";

const Navbar = () => {
  React.useEffect(() => {
    addInitialUserToLocalStorage();
  }, []);

  const links = [
    { label: "Impressum", route: "/impressum" },
    { label: "Datenschutzerklärung", route: "/datenschutz" },
  ];
  return (
    <nav>
      <NavLink label="Digi-TB" />
      <div className="">
        {links.map((link) => (
          <NavLink key={link.label} {...link} />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
