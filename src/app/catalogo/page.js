import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";

export const metadata = { title: "Catálogo" };

export default function Catalogo() {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                backgroundColor: "#000",
                padding: "48px 16px",
            }}
        >
            {/* 🎥 Video de fondo (mismo estilo que en Home) */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/video-poster.jpg" // opcional
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    pointerEvents: "none", // para que el clic derecho sea del navegador
                }}
                aria-hidden="true"
            >
                <source src="/video2.mp4" type="video/mp4" />
            </video>

            {/* Capa oscura */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
                    pointerEvents: "none",
                }}
            />

            {/* Contenido */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <h2
                    style={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "clamp(24px, 3vw, 36px)",
                        marginBottom: "24px",
                    }}
                >
                    Catálogo
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
                        gap: "24px",
                    }}
                >
                    {/* 640px+ → 2 col, 1024px+ → 3 col (responsive simple sin Tailwind) */}
                    <style>{`
            @media (min-width: 640px) {
              .gridCols { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            }
            @media (min-width: 1024px) {
              .gridCols { grid-template-columns: repeat(3, minmax(0, 1fr)); }
            }
          `}</style>
                    <div className="gridCols" style={{ display: "grid", gap: "24px" }}>
                        {products.map((p) => (
                            <ProductCard key={p.slug} p={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

