import "./globals.css";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SHOP_BRAND || "Perfumería",
  description: "Perfumes originales con pago por SINPE Móvil.",
};

export default function RootLayout({ children }) {
  const BRAND = process.env.NEXT_PUBLIC_SHOP_BRAND || "Perfumería";
  const PHONE = process.env.NEXT_PUBLIC_SHOP_PHONE || "";

  return (
    <html lang="es">
      <body>
        <header className="border-b border-zinc-800">
          <nav className="container h-16 flex items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-wide">
              {BRAND}
            </a>
            <div className="flex items-center gap-6">
              <a href="/catalogo" className="hover:opacity-80">
                Catálogo
              </a>
              <a
                href={`https://wa.me/${PHONE}`}
                target="_blank"
                rel="noopener"
                className="btn btn-outline"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </header>

        <main className="container py-10">{children}</main>

        <footer className="border-t border-zinc-800 mt-16">
          <div className="container py-6 text-sm text-zinc-400">
            © {new Date().getFullYear()} {BRAND} · Hecho en CR
          </div>
        </footer>
      </body>
    </html>
  );
}
