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
  return (
    <div>
      <h1>Country {country.name}</h1>
      <p>Currency: {country.capital}</p>
      <p>Currency: {country.area}km</p>
    </div>
  );
}
// const SingleCountry = ({ country }: SingleCountryProps) => {
//   return <h1>Country {country.name}</h1>;
// };
