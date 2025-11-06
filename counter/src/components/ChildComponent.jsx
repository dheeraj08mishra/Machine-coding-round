import React, { useEffect } from "react";

const ChildComponent = () => {
  useEffect(() => {
    console.log("Child Component Rendered");
  }, []);
  return <div>ChildComponent</div>;
};

export default ChildComponent;
