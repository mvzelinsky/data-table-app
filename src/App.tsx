import React from 'react';
import DataTable from './components/DataTable';
import SearchInput from './components/common/SearchBar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Data Table App</h1>
      <SearchInput />
      <DataTable />
    </div>
  );
}

export default App;
