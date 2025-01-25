import React from "react";
import FilterBar from "./FilterBar";
import Countries from "./Countries";
import { Country } from "../Types";

export type Props = {
  newData: Country[];
};

const RestCountries = ({ newData }: Props) => {
  return (
    <>
      <FilterBar />
      <Countries countries={newData} />
    </>
  );
};

export default RestCountries;
