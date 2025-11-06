import React from "react";

const Home = React.memo(() => {
  console.log("Home Component Rendered");
  return (
    <div>
      <h1>Home</h1>
      <p>
        Welcome to the Home component!, initial rendered at {performance.now()}
      </p>
    </div>
  );
});

export default Home;
