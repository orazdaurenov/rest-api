import React from "react";
import CountryCard from "./CountryCard";

export type ResponseObj = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: string;
    };
  };
  cca3: string;
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: [string];
};
type RestAPI = ResponseObj[];
const Countries = async () => {
  const responce = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3,flags,population,region,capital",
  );
  const data = (await responce.json()) as RestAPI;
  return (
    <>
      <ul className="grid grid-cols-4 gap-5">
        {data.map((country) => (
          <li className="mb-4" key={country.cca3}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Countries;
