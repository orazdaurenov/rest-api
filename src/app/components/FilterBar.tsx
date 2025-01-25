"use client";
import React from "react";
import { Country } from "../Types";

type FilterProps = {
  countries: Country[];
};

const FilterBar = ({ countries }: FilterProps) => {
  const allRegions = countries.map((c) => c.region);
  const IndRegions = new Set(allRegions);
  const SelectedRegions = Array.from(IndRegions);

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
        {SelectedRegions.map((region) => (
          <option value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
