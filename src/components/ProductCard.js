"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ p }) {
    return (
        <div className="card p-5 flex flex-col items-center text-center">
            <div className="text-xs uppercase text-zinc-400">{p.brand}</div>

            <h3 className="text-lg font-semibold leading-snug mt-1">{p.name}</h3>

            {/* Imagen grande */}
            <div className="mt-3">
                <Image
                    src="/imagen3.jpg" // tu imagen en /public
                    alt={p.name}
                    width={160}
                    height={180}
                    className="rounded-md object-contain"
                />
            </div>

            {/* Detalles */}
            <div className="mt-2 text-sm text-zinc-400">{p.ml} ml</div>
            <div className="mt-1 text-base text-zinc-300">
                {p.price == null
                    ? "Consultar"
                    : `₡${p.price.toLocaleString("es-CR")}`}
            </div>

            {/* Botón */}
            <Link
                href={`/producto/${p.slug}`}
                className="btn btn-primary mt-4"
            >
                Ver
            </Link>
        </div>
    );
}
