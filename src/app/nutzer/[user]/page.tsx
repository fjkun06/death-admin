"use client";
import { User } from "@/utils/localStorage";
import React from "react";
function getData() {
  const res = localStorage.getItem("currentUser");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (res === null) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return JSON.parse(res);
}

const Projects = ({ params }: { params: { user: string } }) => {
  const currentUser: User = getData();
  console.log(currentUser);

  return (
    <main>
      {params.user}
      <div>
        <span>{currentUser.user}</span>
        <span>{currentUser.token}</span>
      </div>
    </main>
  );
};

export default Projects;
