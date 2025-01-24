import React from "react";
import { Country } from "../Types";

type CardProps = {
  country: Country;
};

const CountryCard = ({ country }: CardProps) => {
  return (
    <article className="text-black bg-white">
      <img className="h-24 w-max" src={country.flags.svg} alt={country.name} />
      <div className="px-2 pb-2 pt-0">
        <h3>{country.name}</h3>
        <p>Popultation: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </article>
  );
};

export default CountryCard;
