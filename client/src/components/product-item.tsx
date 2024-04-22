import { Product } from "../types/products";

interface Props {
  data: Product;
}

export default function ProductItem({ data }: Props) {
  const { name, price } = data;
  return (
    <div className="shadow-lg rounded-md p-3 border space-y-2" data-testid="product-item">
      <div className="bg-slate-100 w-full aspect-square flex justify-center items-center">Image</div>
      <strong className="block text-sm">{name}</strong>
      <div className="text-xs">
        Price: <strong>£{price}</strong>
      </div>
    </div>
  );
}
