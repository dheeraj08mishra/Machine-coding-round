import React, { useContext, createContext, useState } from "react";

const TabsContext = createContext(null);
export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue || null);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function Tab({ id, children }) {
  const ctx = useContext(TabsContext);
  const { active, setActive } = ctx;
  const isActive = active === id;
  return (
    <button
      style={{
        marginRight: "10px",
        background: isActive ? "skyblue" : "red",
      }}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ id, children }) {
  const ctx = useContext(TabsContext);
  const { active } = ctx;
  if (active !== id) return null;
  return <div>{children}</div>;
}
