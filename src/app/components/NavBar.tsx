import React from "react";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <div className="m-0 flex justify-between border-b-2 border-b-gray-200 py-5">
      <h1 className="text-lg font-bold">Where in the world ?</h1>
      <ModeToggle />
    </div>
  );
};

export default NavBar;
