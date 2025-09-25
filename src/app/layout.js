import "./globals.css";

export const metadata = {
  title: "Noche de los Príncipes",
  description: "Perfumes originales · Compra por WhatsApp y pago por SINPE Móvil.",
};

export default function RootLayout({ children }) {
  const PHONE = process.env.NEXT_PUBLIC_SHOP_PHONE || "";

  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#0a0a0a",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <header
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1rem",
            borderBottom: "1px solid #333",
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(6px)",
          }}
        >
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold", color: "#fff", textDecoration: "none" }}>
            {/* Ícono de casa */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="22" height="22">
              <path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3z" />
            </svg>
            Home
          </a>

          <nav style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
            <a className="link" href="/catalogo">Catálogo</a>
            <a
              className="link"
              href={`https://wa.me/${PHONE}`}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </nav>
        </header>

        {/* Contenido */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            padding: "0.9rem 1rem",
            textAlign: "center",
            borderTop: "1px solid #333",
            color: "#a1a1aa",
            fontSize: 13,
          }}
        >
          © {new Date().getFullYear()} Noche de Príncipes · Hecho en CR
        </footer>
      </body>
    </html>
  );
}
