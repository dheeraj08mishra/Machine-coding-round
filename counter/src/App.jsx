import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Count from "./components/Count";
import { useCallback } from "react";
// export default function App() {
//   const lastContRef = useRef(0);
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("App Component Rendered with last count:", lastContRef.current);
//     lastContRef.current = count;
//   }, [count]);
//   console.log("Rendered App Component with count in useEffect:", count);
//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };

//   const incrementPlus5 = () => {
//     for (let i = 0; i < 5; i++) {
//       setCount((prev) => prev + 1);
//     }
//   };
//   const decrement = () => {
//     if (count > 0) setCount((prev) => prev - 1);
//   };
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>Count: {count}</h2>
//       <h3>Last Render count : {lastContRef.current}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={incrementPlus5}>Increment +5</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       {/* <Count count={count} /> */}
//       {/* <StaticCount /> */}
//       {/* <ChildComponent /> */}
//     </div>
//   );
// }

export default function App() {
  // let normalCount = 0;
  const [stateCount, setStateCount] = useState(0);

  const handleClick = () => {
    console.log("Button Clicked");
    // normalCount++;
    setStateCount(stateCount + 1);
  };

  const handleChildClick = useCallback(() => {
    console.log("Child Button Clicked");
    // normalCount++;
  }, []);

  // useEffect(() => {
  //   renderCount.current++;
  // });

  console.log("App rendered");
  return (
    <>
      {/* <p>normalCount: {normalCount}</p> */}
      <p>stateCount: {stateCount}</p>
      <Count onClick={handleChildClick} />
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
