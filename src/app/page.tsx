import RestCountries from "./components/RestCountries";
import { type Country } from "./Types";

export default async function HomePage() {
  const responce = await fetch("https://www.apicountries.com/countries");
  const data = (await responce.json()) as Country[];
  // render all contries
  // how to find an individual contry page?
  // working method: /countires/code
  // user has to know endpoint and the country code
  // we also know the endpoint and the country code
  // when a card gets clicked, it goes to the rigth endpoint and country code
  // tool kit: anchor have the right behavior, so we have to use them properly
  return (
    <div>
      <RestCountries newData={data} />
    </div>
  );
}
