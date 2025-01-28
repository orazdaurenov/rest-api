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
        <button className="m-1 flex-row rounded-md border border-gray-300 px-3 py-1 text-sm">
          {country.name}
        </button>
      </a>
    </>
  );
};

export default BorderCountBtn;
