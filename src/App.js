import React, { useState, useEffect } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import Filter from './components/Filter';

const App = () => {
  const [data, setData] = useState([]);
  const [endYearFilter, setEndYearFilter] = useState('');
  const [topicsFilter, setTopicsFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API
  // fetch('http://localhost:5000/api/alldata')

  const fetchData = () => {
    fetch('http://localhost:5000/api/alldata')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  };
  console.log('----------====================')
  console.log(fetchData)
  // Get unique filter options based on fetched data
  const endYearOptions = [...new Set(data.map((item) => item.end_year))];
  const topicsOptions = [...new Set(data.map((item) => item.topic))];
  const sectorOptions = [...new Set(data.map((item) => item.sector))];
  const regionOptions = [...new Set(data.map((item) => item.region))];

  // Filter data based on selected filters
  const filteredData = data.filter(
    (item) =>
      (!endYearFilter || item.end_year === endYearFilter) &&
      (!topicsFilter || item.topic === topicsFilter) &&
      (!sectorFilter || item.sector === sectorFilter) &&
      (!regionFilter || item.region === regionFilter)
  );
  console.log('-------------------------')
  console.log(filteredData)
  return (
    <div className="App">
      <h1>Visualization Dashboard</h1>
      <Filter options={endYearOptions} onChange={(e) => setEndYearFilter(e.target.value)} />
      <Filter options={topicsOptions} onChange={(e) => setTopicsFilter(e.target.value)} />
      <Filter options={sectorOptions} onChange={(e) => setSectorFilter(e.target.value)} />
      <Filter options={regionOptions} onChange={(e) => setRegionFilter(e.target.value)} />
      <BarChart data={filteredData} />
    </div>
  );
};

export default App;
