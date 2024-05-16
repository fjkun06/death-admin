"use client";
import React from "react";
import { NavLink } from "@/components";
import { data } from "@/utils/localStorage";

const Navbar = () => {
  React.useEffect(() => {
    /***Saving users to localstorage */
    const users = localStorage.getItem("users");
    if (users === null) {
      localStorage.setItem("users", JSON.stringify(data));
    }
    console.log("hell-o: ", JSON.parse(users as string));
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
