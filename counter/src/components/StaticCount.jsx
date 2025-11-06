import React from "react";

const StaticCount = React.memo(() => {
  console.log("Rendered StaticCount child Component");
  return <div>StaticCount</div>;
});

export default StaticCount;
