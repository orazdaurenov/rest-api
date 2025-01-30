import RestCountries from "../components/RestCountries";
import { type Country } from "../Types";

export default async function HomePage() {
  const responce = await fetch("https://www.apicountries.com/countries");
  const data = (await responce.json()) as Country[];

  return (
    <div>
      <RestCountries newData={data} />
    </div>
  );
}
