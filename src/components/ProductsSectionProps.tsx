import type { IProduct } from "../Types/types";
import { ProductCard } from "./ProductCard";

type ProductsSectionProps = {
  title: string;
  products: IProduct[];
};

export default function ProductsSection({
  title,
  products,
}: ProductsSectionProps) {
  return (
    <section className="w-full mt-11 max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold text-[#0aad0a] mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}