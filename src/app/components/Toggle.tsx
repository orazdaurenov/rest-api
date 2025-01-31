"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Toggle = () => {
  // might not respect user choice on first load
  const [isLightMode, setDarkMode] = useState<boolean | undefined>(undefined);
  useEffect(() => {

    const initialTheme = Array.from(document.documentElement.classList).some(
      (e) => e === "dark",
    );
    setDarkMode(initialTheme)
  }, [setDarkMode])


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
      {isLightMode !== undefined &&
        <ColorMode isDarkMode={isLightMode} />
      }
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
