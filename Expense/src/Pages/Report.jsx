import React from "react";
import useFetch from "../Hooks/useFetch";

const Report = () => {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Report</h2>
      {data &&
        data.slice(0, 5).map((item) => (
          <div key={item.id}>
            <h3>
              {item.id}.{item.title}
            </h3>
          </div>
        ))}
    </div>
  );
};

export default Report;
