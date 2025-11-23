import './App.css'

function App() {
  return (
    <div style={{
      fontFamily: "system-ui, sans-serif",
      maxWidth: "900px",
      margin: "40px auto",
      lineHeight: 1.5
    }}>
      <header style={{ marginBottom: "24px" }}>
        <h1>WebLLM – LLM rechtstreeks in de browser</h1>
        <p>
          Deze demo toont een klein taalmodel dat volledig <strong>lokaal</strong> draait
          in de browser via <strong>WebGPU</strong>. Er komt geen cloud-API of backend aan te pas.
        </p>
        <p style={{ fontSize: "0.9rem", color: "#666" }}>
          Tip tijdens de presentatie: open DevTools &gt; Network om te tonen dat er geen externe requests vertrekken.
        </p>
      </header>

      <section style={{ marginBottom: "16px" }}>
        <h2 style={{ fontSize: "1.2rem" }}>Live WebLLM demo</h2>
        <p>
          Hieronder zie je een mini-chatinterface. De tekst die gegenereerd wordt, komt
          van een model dat in de browser zelf draait (Edge AI).
        </p>
      </section>

      <section>
        <iframe
          src="/webllm-demo.html"
          title="WebLLM browser demo"
          style={{
            width: "100%",
            height: "420px",
            border: "1px solid #ddd",
            borderRadius: "12px"
          }}
        />
      </section>
    </div>
  );
}

export default App
