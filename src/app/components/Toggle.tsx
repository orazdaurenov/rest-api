"use client";
import React from "react";

const Toggle = () => {
  return (
    <button
      onClick={() => {
        document.documentElement.classList.toggle("dark");
        // Whenever the user explicitly chooses light mode

        // Whenever the user explicitly chooses dark mode
      }}
    >
      toggle
    </button>
  );
};

export default Toggle;
