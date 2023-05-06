import logo from './logo.svg';
import Search from './components/Search';
import Display from './components/Display';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
  
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/:select/:id" element={<Display />} />
        </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
