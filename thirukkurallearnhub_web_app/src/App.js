import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/**
 * Placeholder Home component
 * PUBLIC_INTERFACE
 */
function HomePage() {
  return (
    <div className="hero">
      <div className="subtitle">Welcome to ThirukkuralLearnHub</div>
      <h1 className="title">Home</h1>
      <div className="description">
        Explore Athigaarams and Kurals. (Content coming soon)
      </div>
      <button className="btn btn-large">Demo Button</button>
    </div>
  );
}

/**
 * Placeholder About component
 * PUBLIC_INTERFACE
 */
function AboutPage() {
  return (
    <div className="hero">
      <div className="subtitle">About Thirukkural & Thiruvalluvar</div>
      <h1 className="title">About</h1>
      <div className="description">
        Learn about Thirukkural and Thiruvalluvar. (Content coming soon)
      </div>
    </div>
  );
}

/**
 * Placeholder Quiz component
 * PUBLIC_INTERFACE
 */
function QuizPage() {
  return (
    <div className="hero">
      <div className="subtitle">Test Your Knowledge!</div>
      <h1 className="title">Quiz</h1>
      <div className="description">
        Try the Thirukkural quiz. (Content coming soon)
      </div>
      <button className="btn btn-large">Start Quiz</button>
    </div>
  );
}

/**
 * Main App with Routing Integration
 * PUBLIC_INTERFACE
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> KAVIA AI
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/about">About</Link>
                <Link className="btn" to="/quiz">Quiz</Link>
              </div>
            </div>
          </div>
        </nav>

        <main style={{ paddingTop: '96px' }}>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;