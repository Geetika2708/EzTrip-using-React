import React, { useState } from "react";

function RailwayDatabase() {
  const [csvData, setCsvData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);
      setError(null);
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const csvContent = reader.result;
        const rows = csvContent.split("\n");
        const data = rows.map(row => row.split(","));
        setCsvData(data);
        setLoading(false);
      };
      reader.onerror = () => {
        setError("Error reading the file.");
        setLoading(false);
      };
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const searchData = csvData.filter(row => {
      const source = row[0];
      return source.toLowerCase().includes(searchInput.toLowerCase());
    });

    setSearchResults(searchData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Railway Database Search</h1>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />

      <input
        type="text"
        placeholder="Search Source"
        value={searchInput}
        onChange={handleSearchInputChange}
      />

      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        {searchResults.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Source</th>
                {/* Add more table headers if needed */}
              </tr>
            </thead>
            <tbody>
              {searchResults.map((result, index) => (
                <tr key={index}>
                  <td>{result[0]}</td>
                  {/* Render more table cells for additional columns */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No matching records found.</p>
        )}
      </div>
    </div>
  );
}

export default RailwayDatabase;
