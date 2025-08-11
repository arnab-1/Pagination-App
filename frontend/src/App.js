import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10; // items per page

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    try {
      const res = await axios.get(`/api/items?page=${page}&limit=${limit}`);
      setItems(res.data.items);          // Adjust key if backend sends differently
      console.log('Data from backend for test is ',res.data);
      
      setTotalPages(res.data.totalPages); 
    } catch (error) {
      console.error("Error fetching itemshahahahah:", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Items List</h1>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
