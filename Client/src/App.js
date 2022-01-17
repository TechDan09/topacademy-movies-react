import React from 'react';
import Movies from './pages/Movies'
import SingleMovie from './pages/SingleMovie'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route exact path="/movies/:id" element={<SingleMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
