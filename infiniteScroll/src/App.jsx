import "./App.css";
import React, { useEffect, useState, useRef, useCallback } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const isFetching = useRef(false);
  const limit = 30;

  // ✅ Fetch users
  useEffect(() => {
    const loadUser = async () => {
      if (isFetching.current) return; // ✅ double guard
      isFetching.current = true;
      setLoading(true);

      try {
        const response = await fetch(
          `https://dummyjson.com/users?skip=${
            (page - 1) * limit
          }&limit=${limit}`
        );
        const data = await response.json();

        setItems((prev) => [...prev, ...data.users]);
        setHasMore(data.skip + data.limit < data.total);
      } catch (error) {
        console.error("Error loading users:", error);
      } finally {
        setLoading(false);
        isFetching.current = false; // ✅ unlock only when done
      }
    };

    loadUser();
  }, [page]);

  // ✅ Scroll Handler (wrapped in useCallback)
  const handleScroll = useCallback(() => {
    if (
      !isFetching.current && // ✅ ensures only one fetch at a time
      hasMore &&
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <h1>Infinite Scroll (Optimized)</h1>
      <div className="container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h3>
              {item.firstName} {item.lastName} - {item.age} years old
            </h3>
          </div>
        ))}
      </div>

      {loading && <p className="loading">Loading more...</p>}
      {!hasMore && <p className="end">All users loaded 🎉</p>}
    </>
  );
}

export default App;
