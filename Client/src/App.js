import React from 'react';
import { Movies } from './pages/Movies'
import { SingleMovie } from './pages/SingleMovie'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/" element={<Movies />} />
          <Route exact path="/movies/:id" element={<SingleMovie />} />
        </Routes>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
