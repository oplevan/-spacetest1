import { Input } from "./ui/input";
import { useFilters } from "../context/filters-context";
import { Checkbox } from "./ui/checkbox";

export default function Filters() {
  const { search, setSearch, showCheapestItems, setShowCheapestItems } = useFilters();
  return (
    <div className="space-y-3 shadow-lg rounded-md p-3 border">
      <Input id="filter-by-name" className="w-full block" type="text" placeholder="Filter by name" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="flex items-center space-x-2 ml-1">
        <Checkbox id="cheapest-items" checked={showCheapestItems} onCheckedChange={() => setShowCheapestItems(!showCheapestItems)} />
        <label htmlFor="cheapest-items" className="text-xs peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Show 5 cheapest items
        </label>
      </div>
    </div>
  );
}
