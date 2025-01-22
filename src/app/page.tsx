import Countries from "./components/Countries";
import FilterBar from "./components/FilterBar";

export default function HomePage() {
  return (
    <div>
      <FilterBar />
      <Countries />
    </div>
  );
}
