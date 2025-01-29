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
  console.log("currencies:", country.currencies);
  console.log("languages:", country.languages);
  return (
    <>
      <BackBtn />
      <div className="grid h-2/4 grid-cols-2 gap-12">
        <div className="content-center">
          <img className="w-12/12" src={country.flags.svg} alt={country.name} />
        </div>
        <div className="content-center p-8">
          <h1 className="mb-5 text-2xl">
            <b>{country.name}</b>
          </h1>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Native Name: {country.nativeName}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Sub Region: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
            <p>
              Top Level Domain: <code>{country.topLevelDomain}</code>
            </p>
            <p>Currencies: {country.currencies[0]?.name}</p>
            <p>
              Languages:{" "}
              {country.languages.map(
                (language, index) => (index ? ", " : "") + language.name,
              )}
            </p>
          </div>
          <BorderCountries country={country} />
        </div>
      </div>
    </>
  );
}
// const SingleCountry = ({ country }: SingleCountryProps) => {
//   return <h1>Country {country.name}</h1>;
// };

const BorderCountries = ({ country }: SingleCountryProps) => {
  if (country.borders) {
    return (
      <div key={country.alpha2Code} className="flex items-center gap-3">
        <h3 className="mt-4">
          <b>Border Countries:</b>
        </h3>
        {country.borders.map((border) => (
          <BorderCountBtn key={border} id={border} />
        ))}
      </div>
    );
  }
  return null;
};
