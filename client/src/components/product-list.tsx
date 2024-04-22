import { useFilters } from "../context/filters-context";
import ProductItem from "./product-item";

export default function ProductList() {
  const { filteredProducts, isLoading } = useFilters();

  return (
    <>
      {isLoading ? (
        <div className="p-5 text-center">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </div>
      )}
    </>
  );
}
