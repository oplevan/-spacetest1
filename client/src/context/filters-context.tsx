import axios from "axios";
import { useState, createContext, useContext, useEffect, useMemo } from "react";
import { FiltersContextType } from "../types/filters";
import { Product } from "../types/products";

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};

export interface FiltersProviderProps {
  children: React.ReactNode;
}

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [search, setSearch] = useState("");
  const [showCheapestItems, setShowCheapestItems] = useState(true);
  const [productListData, setProductsData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/products");
        setProductsData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchItems();
  }, []);

  const filteredProducts: Product[] = useMemo(() => {
    const filtered = productListData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

    if (!showCheapestItems) {
      return filtered;
    } else {
      return filtered.sort((a, b) => a.price - b.price).slice(0, 5);
    }
  }, [productListData, showCheapestItems, search]);

  return (
    <FiltersContext.Provider value={{ search, setSearch, showCheapestItems, setShowCheapestItems, filteredProducts, isLoading }}>
      {children}
    </FiltersContext.Provider>
  );
}
