"use client";
import React, { useState } from "react";
import { type Country } from "../Types";

type FilterProps = {
  countries: Country[];
  setCountries: (input: Country[]) => void;
};

const FilterBar = ({ countries, setCountries }: FilterProps) => {
  return (
    <div className="my-5 flex justify-between px-0">
      <InputFilter setCountries={setCountries} countries={countries} />
      <SelectFilter countries={countries} setCountries={setCountries} />
    </div>
  );
};

const InputFilter = ({ countries, setCountries }: FilterProps) => {
  const [curCountries, setFilteredCountries] = useState("");
  const onSearch = () => {
    const countryArr = [];
    //countryarr
    //INSIDE LOOP
    // if(has string) => push into country arr
    //END LOOP
    // setState(countryArr)
    for (const country of countries) {
      if (country.name?.includes(curCountries)) {
        countryArr.push(country);
      }
    }
    setCountries(countryArr);
  };

  return (
    <>
      <input
        className="rounded-md border border-gray-200 p-2 text-gray-500"
        type="text"
        value={curCountries}
        placeholder="Search for a country..."
        onChange={(e) => {
          const string = e.target.value;
          const FirstCapitalized =
            string.charAt(0).toUpperCase() + string.slice(1);
          setFilteredCountries(FirstCapitalized);
          onSearch();
        }}
      />
    </>
  );
};

const SelectFilter = ({ countries, setCountries }: FilterProps) => {
  const [definedRegion, setDefinedRegion] = useState(false);
  const allRegions = countries.map((c) => c.region);
  const IndRegions = new Set(allRegions);
  const SelectedRegions = Array.from(IndRegions);

  return (
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
  );
};

export default FilterBar;
