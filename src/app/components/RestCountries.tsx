"use client";
import React, { useState } from "react";
import FilterBar from "./FilterBar";
import Countries from "./Countries";
import { Country } from "../Types";

export type Props = {
  newData: Country[];
};

const RestCountries = ({ newData }: Props) => {
  const [renderedCountries, setRenderedCountries] = useState(newData);

  return (
    <>
      <FilterBar countries={newData} setCountries={setRenderedCountries} />
      <Countries countries={renderedCountries} />
    </>
  );
};

export default RestCountries;
