import React from "react";
import Toggle from "./Toggle";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="m-0 flex justify-between border-b-2 border-b-gray-200 py-5">
      <h1 className="text-lg font-bold">
        <Link href="/countries/">Where in the world ?</Link>
      </h1>
      <Toggle />
    </div>
  );
};

export default NavBar;
