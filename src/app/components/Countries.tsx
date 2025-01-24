import React from "react";
import CountryCard from "./CountryCard";
import { Country } from "../Types";

const Countries = async ({}) => {
  const responce = await fetch("https://www.apicountries.com/countries");
  const data = (await responce.json()) as Country[];
  return (
    <>
      <ul className="grid grid-cols-4 gap-8">
        {data.map((country) => (
          <li className="mb-4" key={country.alpha2Code}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
