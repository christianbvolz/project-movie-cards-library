import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
    </div>
  );
}

export default App;
