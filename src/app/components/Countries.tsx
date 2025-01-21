import React from "react";

type ResponseObj = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: string;
    };
  };
  cca3: string;
};
type RestAPI = ResponseObj[];
const Countries = async () => {
  const responce = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3",
  );
  const data = (await responce.json()) as RestAPI;
  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.map((country) => (
          <li key={country.cca3}>{country.name.official}</li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
