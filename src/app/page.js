"use client";

export default function Home() {
  const PHONE = process.env.NEXT_PUBLIC_SHOP_PHONE || "";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "calc(100vh - 64px)", // 64px = alto del header
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video-poster.jpg" // opcional
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <source src="/video1.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
        }}
      />

      {/* Contenido principal */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          color: "#fff",
          padding: "1rem",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            marginInline: "auto",
            width: "500px",
            height: "500px",
            borderRadius: "9999px",
            padding: "12px",
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            marginBottom: "1.5rem",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img
            src="/imagen2.png"
            alt="Noche de Príncipes - Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "9999px",
            }}
          />
        </div>

        {/* Texto */}
        <h1
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px, 4.5vw, 48px)",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2.2vw, 20px)",
            color: "rgba(255, 255, 255, 1)",
            marginBottom: "28px",
            fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
            fontStyle: "italic",
            letterSpacing: "0.5px",
            textShadow: "0 2px 8px rgba(251, 214, 4, 0.92)",
            animation: "floatText 3s ease-in-out infinite",
          }}
        >
          👑 Fragancias que conquistan reinos 👑
        </p>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Catálogo */}
          <a
            href="/catalogo"
            style={{
              padding: "14px 28px",
              background: "linear-gradient(90deg, #000000ff, #000000ff)",
              color: "#ffffffff",
              textDecoration: "none",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "clamp(14px, 1.8vw, 16px)",
              boxShadow: "0 4px 12px rgba(255, 255, 255, 1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, #ffc800ff, #000000ff)")
            }
            onMouseLeave={(e) =>
            (e.currentTarget.style.background =
              "linear-gradient(90deg, #000000ff, #000000ff)")
            }
          >
            Catálogo
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE}`}
            target="_blank"
            rel="noopener"
            style={{
              padding: "14px 28px",
              border: "2px solid rgba(255,255,255,0.9)",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "clamp(14px, 1.8vw, 16px)",
              background: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(253, 194, 0, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Animación flotante */}
      <style>
        {`
          @keyframes floatText {
            0% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

