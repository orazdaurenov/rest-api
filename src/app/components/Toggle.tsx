"use client";
import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Toggle = () => {
  // might not respect user choice on first load
  const initialTheme = Array.from(document.documentElement.classList).some(
    (e) => e === "dark",
  );
  const [isLightMode, setDarkMode] = useState(initialTheme);
  return (
    <button
      onClick={() => {
        const lol = document.documentElement.classList.toggle("dark");
        setDarkMode(lol);
        //console.log(cla);
        // Whenever the user explicitly chooses light mode

        // Whenever the user explicitly chooses dark mode
      }}
    >
      <ColorMode isDarkMode={isLightMode} />
    </button>
  );
};
type ThemeProps = {
  isDarkMode: boolean;
};
const ColorMode = ({ isDarkMode }: ThemeProps) => {
  if (isDarkMode) {
    return <MdDarkMode />;
  }
  return <MdLightMode />;
};
export default Toggle;
