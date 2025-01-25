"use client";
import React from "react";
import { Country } from "../Types";

type FilterProps = {
  country?: Country[];
};

const FilterBar = ({ country = [] }: FilterProps) => {
  const regions = country.map((region) => region.region);

  console.log("regions:", regions);
  return (
    <div className="my-5 flex justify-between px-0">
      <input
        className="rounded-md border border-gray-200 p-2 text-gray-500"
        type="text"
        value=""
        placeholder="Search for a country..."
      />
      <select
        className="rounded-md border border-gray-200 p-2 text-gray-500"
        name=""
        id=""
      >
        <option value="">Filter by region</option>
        {regions.map((region) => (
          <option value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
