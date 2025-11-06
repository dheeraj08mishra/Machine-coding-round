// import React, { useState } from "react";
// import Home from "./Components/Home.jsx";

// import "./App.css";

// function App() {
//   const [loadReport, setLoadReport] = useState(0);
//   const [loadAnalytics, setLoadAnalytics] = useState(0);
//   const Report = React.lazy(() => import("./Components/Report.jsx"));
//   const Analytics = React.lazy(() => import("./Components/Analytics.jsx"));

//   const loadOtherComponents = async (component) => {
//     if (component === "report") {
//       setLoadReport(!loadReport);
//     } else if (component === "analytics") {
//       setLoadAnalytics(!loadAnalytics);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>React Lazy Loading </h1>
//       </div>
//       <Home />
//       {loadReport ? (
//         <>
//           {console.log("Rendering Report Component")}
//           <React.Suspense fallback={<div>Loading Report...</div>}>
//             <Report />
//           </React.Suspense>
//         </>
//       ) : null}
//       {loadAnalytics ? (
//         <>
//           {console.log("Rendering Analytics Component")}
//           <React.Suspense fallback={<div>Loading Analytics...</div>}>
//             <Analytics />
//           </React.Suspense>
//         </>
//       ) : null}
//       <h1>Load other components by Clicking on buttons</h1>
//       <button onClick={() => loadOtherComponents("report")}>
//         {loadReport ? "Unload Report" : "Load Report"}
//       </button>
//       <button onClick={() => loadOtherComponents("analytics")}>
//         {loadAnalytics ? "Unload Analytics" : "Load Analytics"}
//       </button>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { useCallback } from "react";

const UserList = React.memo(({ users }) => {
  console.log("UserList rendered");
  return (
    <div>
      <h3>Users ({users.length})</h3>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
});

const Counter = React.memo(({ count, increment }) => {
  console.log("Counter rendered");
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increment}>+1</button>
    </div>
  );
});

const Form = React.memo(({ onSubmit }) => {
  console.log("Form rendered");
  const [name, setName] = useState("");
  return (
    <div>
      <input
        placeholder="Enter user"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          onSubmit(name);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
});

const Clock = React.memo(() => {
  console.log("Clock rendered");
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Current Time: {time}</h3>
    </div>
  );
});
export default function App() {
  console.log("App rendered");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(["Alice", "Bob"]);

  const addUser = useCallback((name) => {
    if (!name) return;
    setUsers((prevUsers) => [...prevUsers, name]);
  }, []);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Performance Audit Challenge</h2>
      <Clock />

      <Counter count={count} increment={increment} />
      <Form onSubmit={addUser} />
      <UserList users={users} />
    </div>
  );
}
