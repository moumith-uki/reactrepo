import React, { useEffect, useState } from "react";

function CounterBox({ title, target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(target / 100);
    const speed = 15;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, speed);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div style={{
      background: "#f8cda1ff",
      padding: "20px",
      borderRadius: "10px",
      width: "200px",
      textAlign: "center",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      color:"#ff8001ff",
      textEmphasisColor:"black"
    }}>
      <div style={{ fontSize: "40px", fontWeight: "bold" }}>{count}</div>
      <h2 style={{ marginBottom: "10px", fontSize: "20px", color:"black"}}>{title}</h2>
    </div>
  );
}

export default function StatusSection() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "40px",
      flexWrap: "wrap"
    }}>
      <CounterBox title="Staff" target={100}/>
      <CounterBox title="Branches" target={52}/>
      <CounterBox title="Customers" target={2000}/>
      <CounterBox title="Products" target={122}/>
    </div>
  );
}