import React from "react";

// const Count = React.memo(({ onClick }) => {
//   console.log("Rendered Count child Component");
//   return <button onClick={onClick}>Increment from Child</button>;
// });

const Count = ({ onClick }) => {
  console.log("Rendered Count child Component");
  return <button onClick={onClick}>Increment from Child</button>;
};

export default Count;
