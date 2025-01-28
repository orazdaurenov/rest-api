import React from "react";
import CountryCard from "./CountryCard";
import { Country } from "../Types";

type CountriesProps = {
  countries: Country[];
};

const Countries = ({ countries }: CountriesProps) => {
  return (
    <>
      <ul className="grid grid-cols-4 gap-8">
        {countries.map((country) => (
          <li className="mb-4" key={country.alpha2Code}>
            <a href={`/countries/${country.alpha2Code}`}>
              <CountryCard country={country} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
