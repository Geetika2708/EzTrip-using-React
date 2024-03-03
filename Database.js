import React, { useState, useEffect } from "react";

function DataBase() {
  const [csvData, setCsvData] = useState([]); // State variable to hold the CSV data
  const [selectedStation, setSelectedStation] = useState(""); // State variable to hold the selected station
  const [searchResult, setSearchResult] = useState([]); // State variable to hold the search result

  // Function to fetch CSV data from the public folder
  const fetchCSVData = async () => {
    try {
      const response = await fetch("/RAILWAY.csv"); // Assuming your CSV file is named data.csv and placed in the public folder
      const csvText = await response.text();
      const rows = csvText.split("\n");
      const data = rows.map(row => row.split(","));
      setCsvData(data);
    } catch (error) {
      console.error("Error fetching CSV data:", error);
    }
  };

  // Fetch CSV data when component mounts
  useEffect(() => {
    fetchCSVData();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to handle station selection change
  const handleStationChange = (e) => {
    setSelectedStation(e.target.value); // Update the selected station state variable
  };

  // Function to handle search
  const handleSearch = () => {
    // Filter data based on selected station
    const searchData = csvData.filter(row => {
      const source = row[0]; // Assuming the source is in the first column
      return source.toLowerCase() === selectedStation.toLowerCase();
    });

    // Set search result
    setSearchResult(searchData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br></br>

      {/* Dropdown select for station selection */}
      <select value={selectedStation} onChange={handleStationChange} className="selectvalue">
        <option value="">Select Station</option>
        <option value="HAZRAT NIZAMUDDIN RAILWAY STATION">HAZRAT NIZAMUDDIN RAILWAY STATION</option>
        <option value="NEW DELHI RAILWAY STATION">NEW DELHI RAILWAY STATION</option>
        <option value="ANAND VIHAR RAILWAY STATION">ANAND VIHAR RAILWAY STATION</option>
        <option value="DELHI CANTT RAILWAY STATION">DELHI CANTT RAILWAY STATION</option>
        <option value="SARAI ROHILLA RAILWAY STATION">SARAI ROHILLA RAILWAY STATION</option>
      </select>

      {/* Button to trigger search */}
      <button onClick={handleSearch} className="selectbtn">Search</button>

      {/* Display search results in a table */}
      <table>
        <thead className="tablehead">
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Start Time</th>
            <th>Distance</th>
            <th>Fare</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody className="tablebody">
          {searchResult
          .sort((a, b) => a[4] - b[4])
          .map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[4]} km</td>
              <td>{row[8]}</td>
              <td>{row[9]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataBase;
