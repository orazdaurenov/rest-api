"use client";
import React, { useState } from "react";
import { Country } from "../Types";

type FilterProps = {
  countries: Country[];
  setCountries: (input: Country[]) => void;
};

const FilterBar = ({ countries, setCountries }: FilterProps) => {
  const [definedRegion, setDefinedRegion] = useState(false);
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
        onChange={(e) => {
          const region = e.target.value;
          if (region === "reset") {
            setCountries(countries);
            return;
          }
          const filteredRegions = countries.filter(
            (country) => country.region === region,
          );
          setCountries(filteredRegions);
          setDefinedRegion(true);

          // if (region === "Europe") {
          //   const europeanNations = countries.filter(
          //     (country) => country.region === "Europe",
          //   );
          //   setCountries(europeanNations);
          // } else if (region === "Asia") {
          //   const asianNations = countries.filter(
          //     (country) => country.region === "Asia",
          //   );
          //   setCountries(asianNations);
          // }
        }}
      >
        <option value="reset">
          {definedRegion ? "All" : "Filter by Region"}
        </option>
        {SelectedRegions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
