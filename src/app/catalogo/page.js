import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = { title: "Catálogo" };

export default function Catalogo() {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-6">Catálogo</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                    <ProductCard key={p.slug} p={p} />
                ))}
            </div>
        </section>
    );
}
