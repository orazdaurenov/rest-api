import React from "react";
import { Country } from "../Types";

type CardProps = {
  country: Country;
};

const CountryCard = ({ country }: CardProps) => {
  return (
    <article className="overflow-hidden rounded-md bg-white text-sm shadow-lg">
      <img
        className="h-28 w-full object-cover object-center"
        src={country.flags.svg}
        alt={country.name}
      />
      <div className="p-2">
        <h3>
          <b>Country:</b> {country.name}
        </h3>
        <p>
          <b>Popultation:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
