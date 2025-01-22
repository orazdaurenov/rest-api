import React from "react";

const FilterBar = () => {
  return (
    <div className="my-5 flex justify-between px-0">
      <input
        className="rounded-sm border border-gray-400 p-2 text-gray-500"
        type="text"
        value=""
        placeholder="Search for a country..."
      />
      <select
        className="rounded-sm border border-gray-400 p-2 text-gray-500"
        name=""
        id=""
      >
        <option value="">Filter by region</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default FilterBar;
