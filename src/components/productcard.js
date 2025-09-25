"use client";
import Link from "next/link";

export default function ProductCard({ p }) {
    return (
        <div className="card p-5">
            <div className="text-xs uppercase text-zinc-400">{p.brand}</div>
            <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
            <div className="mt-1 text-sm text-zinc-400">{p.ml} ml</div>

            <div className="mt-4 flex items-center justify-between">
                <div className="text-base text-zinc-300">
                    {p.price == null ? "Consultar" : `₡${p.price.toLocaleString("es-CR")}`}
                </div>
                <Link href={`/producto/${p.slug}`} className="btn btn-primary">Ver</Link>
            </div>
        </div>
    );
}
