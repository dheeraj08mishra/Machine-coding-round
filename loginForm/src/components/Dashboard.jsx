import React, { useEffect } from "react";

const Dashboard = ({ setIsLoggedIn }) => {
  useEffect(() => {
    console.log("Dashboard component mounted");
    return () => {
      console.log("Dashboard component unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Welcome back!</h1>
      <p>This is your dashboard.</p>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
};

export default Dashboard;
