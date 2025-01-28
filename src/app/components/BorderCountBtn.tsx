import React from "react";
import { Country } from "../Types";

type BorderCountBtnProps = {
  id: string;
};

const BorderCountBtn = async ({ id }: BorderCountBtnProps) => {
  const response = await fetch(`https://www.apicountries.com/alpha/${id}`);
  const country = (await response.json()) as Country;
  return (
    <>
      <a href={`/countries/${country.alpha2Code}`}>
        <button className="my-8 rounded-md border border-gray-300 px-7 py-1">
          {country.name}
        </button>
      </a>
    </>
  );
};

export default BorderCountBtn;
