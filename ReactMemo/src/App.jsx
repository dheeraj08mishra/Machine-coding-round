import React, { useState, useMemo } from "react";

import "./App.css";

function heavyCompute(n) {
  // simulate expensive CPU work
  const start = performance.now();
  let total = 0;
  for (let i = 0; i < n * 100000; i++) {
    total += i % 7 ^ i % 13; // some cheap but repeated math
  }
  const end = performance.now();
  console.log(`heavyCompute(${n}) took ${(end - start).toFixed(2)}ms`);
  return total;
}

const Child = React.memo(({ list }) => {
  console.log("Child rendered");
  return (
    <div>
      <p>Child: list length = {list.length}</p>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  // pretend this is expensive to compute (based on count for demo)
  const result = useMemo(() => {
    performance.now();
    return heavyCompute(20);
  }, []); // change 20 -> larger to increase cost
  const list = useMemo(
    () => Array.from({ length: 1000 }, (_, i) => i + result),
    [result]
  );

  console.log("App rendered");

  return (
    <div style={{ padding: 20 }}>
      <h2>Without useMemo</h2>
      <p>Result from heavyCompute (not used visually): {result}</p>

      <button onClick={() => setCount((c) => c + 1)}>Re-render parent</button>
      <p>Parent count: {count}</p>

      <Child list={list} />
    </div>
  );
}
