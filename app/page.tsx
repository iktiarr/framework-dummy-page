export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        gap: "12px",
      }}
    >
      <p style={{ fontSize: "0.85rem", color: "#9ca3af", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        Framework Dummy
      </p>
      <h1 style={{ fontSize: "2rem", fontWeight: 600, color: "#111827", margin: 0 }}>
        Halaman Uji Coba
      </h1>
      <p style={{ fontSize: "0.95rem", color: "#6b7280", margin: 0 }}>
        Halaman ini digunakan untuk keperluan pengujian.
      </p>
    </div>
  );
}
