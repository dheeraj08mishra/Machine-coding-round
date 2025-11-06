import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    // Fetch data or perform any side effects here

    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products);
      setFilteredData(data.products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredData(data);
        return;
      }
      const lowercaseTerm = searchTerm.toLowerCase();
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(lowercaseTerm)
      );
      setFilteredData(filtered);
    }, 300); // Debounce time of 300ms

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, data]);

  const filterRecords = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === "") {
      setFilteredData(data);
      return;
    }
  };
  return (
    <>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={filterRecords}
      />
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
