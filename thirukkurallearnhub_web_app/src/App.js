import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Quiz from './pages/Quiz';

/**
 * Main App with Routing Integration
 * PUBLIC_INTERFACE
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar />
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;