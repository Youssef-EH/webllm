import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 16px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "980px",
          background: "rgba(15,23,42,0.9)", // zelfde kleur, iets donkerder
          borderRadius: "18px",
          padding: "28px 28px 32px",
          boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
          border: "1px solid rgba(148,163,184,0.35)",
        }}
      >
        <header style={{ marginBottom: "20px" }}>
          <h1 style={{ fontSize: "1.9rem", marginBottom: "8px" }}>
            WebLLM – LLM rechtstreeks in de browser
          </h1>
          <p style={{ margin: 0, color: "#cbd5f5" }}>
            Deze demo toont een klein taalmodel dat volledig <strong>lokaal</strong>{" "}
            draait in de browser via <strong>WebGPU</strong>. Er komt geen cloud-API
            of backend aan te pas.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginTop: "10px" }}>
            Tip tijdens de presentatie: open DevTools &gt; <em>Network</em> om te
            tonen dat er geen externe requests vertrekken tijdens de generatie.
          </p>
        </header>

        <section style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>Live WebLLM demo</h2>
          <p style={{ margin: 0, color: "#cbd5e1", fontSize: "0.95rem" }}>
            Hieronder zie je een mini-chatinterface. De tekst die gegenereerd wordt,
            komt van een model dat in de browser zelf draait (Edge&nbsp;AI).
          </p>
        </section>

        <section>
          <iframe
            src="/webllm-demo.html"
            title="WebLLM browser demo"
            style={{
              width: "100%",
              height: "540px",       // wat hoger
              border: "1px solid rgba(148,163,184,0.55)",
              borderRadius: "14px",
              backgroundColor: "#020617",
            }}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
