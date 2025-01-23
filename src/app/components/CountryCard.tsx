import React from "react";
import { Country } from "../Types";

type CardProps = {
  country: Country;
};

const CountryCard = ({ country }: CardProps) => {
  return (
    <article className="border-white text-black h-48 w-40 border border-solid">
      <img className="h-20 w-full" src={country.flags.svg} alt={country.name} />
      <h3>{country.name}</h3>
      <p>Popultation: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </article>
  );
};

export default CountryCard;
