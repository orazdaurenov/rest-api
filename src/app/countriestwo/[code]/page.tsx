import { Country } from "~/app/Types";

export default async function CallingCountriesPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const code = (await params).code;
  const response = await fetch(
    `https://www.apicountries.com/callingcode/${code}`,
  );
  const [country] = (await response.json()) as Country[];
  // we havent touched err handling, temporary solution:
  if (country === undefined) {
    return null;
  }
  return <div>My Post: {country.name}</div>;
}
