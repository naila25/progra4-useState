import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh", 
      width: "100vw", 
      textAlign: "center", 
      fontFamily: "Arial, sans-serif", 
      backgroundColor: "#f4f4f4" 
    }}>
      <h1 style={{ fontSize: "2rem", color: "#333" }}>Contador</h1>
      <p style={{ fontSize: "3rem", fontWeight: "bold", color: "#007bff", margin: "20px 0" }}>{contador}</p>
      <button 
        style={{ 
          backgroundColor: "#007bff", 
          color: "white", 
          border: "none", 
          padding: "10px 20px", 
          fontSize: "1rem", 
          cursor: "pointer", 
          borderRadius: "5px", 
          transition: "background 0.3s" 
        }}
        onClick={() => setContador(contador + 1)}
        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
        onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
      >
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
