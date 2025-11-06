import React from "react";
import { Tabs, Tab, TabPanel } from "./Components/Tabs/Simple.jsx";
export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Context Component</h2>

      <Tabs defaultValue="Home">
        <div style={{ display: "flex", marginBottom: 12 }}>
          <Tab id="Home">Home</Tab>
          <Tab id="Profile">Profile</Tab>
          <Tab id="Settings">Settings</Tab>
          <Tab id="About">About</Tab>
        </div>

        <TabPanel id="Home">🏠 Home Content</TabPanel>
        <TabPanel id="Profile">👤 Profile Info</TabPanel>
        <TabPanel id="Settings">⚙️ Settings Panel</TabPanel>
        <TabPanel id="About">ℹ️ About Us</TabPanel>
      </Tabs>
    </div>
  );
}
