"use client";

import React from "react";

const BackBtn = () => {
  return (
    <button
      onClick={() => {
        history.back();
      }}
      className="my-8 rounded-md border border-gray-300 px-7 py-1"
    >
      Back
    </button>
  );
};

export default BackBtn;
