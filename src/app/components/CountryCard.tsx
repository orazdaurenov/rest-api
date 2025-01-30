import React from "react";
import { type Country } from "../Types";
import Image from "next/image";

type CardProps = {
  country: Country;
};

const CountryCard = ({ country }: CardProps) => {
  return (
    <article className="overflow-hidden rounded-md bg-white text-sm shadow-lg dark:bg-black">
      <Image
        className="h-28 w-full object-cover object-center"
        src={country.flags.svg}
        alt={country.name}
        width={100}
        height={50}
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
