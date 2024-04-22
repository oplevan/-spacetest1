import { Product } from "./products";

export interface FiltersContextType {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showCheapestItems: boolean;
  setShowCheapestItems: React.Dispatch<React.SetStateAction<boolean>>;
  filteredProducts: Product[];
  isLoading: boolean;
}
