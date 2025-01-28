import BackBtn from "~/app/components/BackBtn";
import BorderCountBtn from "~/app/components/BorderCountBtn";
import { Country } from "~/app/Types";

type SingleCountryProps = {
  country: Country;
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const response = await fetch(`https://www.apicountries.com/alpha/${id}`);
  const country = (await response.json()) as Country;
  console.log(country.borders);
  return (
    <>
      <BackBtn />
      <div className="grid grid-cols-2 gap-12">
        <div>
          <img
            className="max-w-md"
            src={country.flags.svg}
            alt={country.name}
          />
        </div>
        <div className="p-8">
          <h1 className="text-2xl">
            <b>{country.name}</b>
          </h1>
          <p>Native Name: {country.nativeName}</p>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Sub Region: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
          <p>Top Level Domain: {country.topLevelDomain}</p>
          <div>
            <h3>Border Countries:</h3>
            {country.borders.map((border) => (
              <BorderCountBtn id={border} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
// const SingleCountry = ({ country }: SingleCountryProps) => {
//   return <h1>Country {country.name}</h1>;
// };
