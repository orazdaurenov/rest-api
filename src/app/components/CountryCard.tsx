import React from "react";
import { ResponseObj } from "./Countries";

type CardProps = {
  country: ResponseObj;
};

const CountryCard = ({ country }: CardProps) => {
  return (
    <article className="h-48 w-40 border border-solid border-white text-black">
      <img
        className="h-20 w-full"
        src={country.flags.svg}
        alt={country.flags.alt}
      />
      <h3>{country.name.common}</h3>
      <p>Popultation: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </article>
  );
};

export default CountryCard;
