import React from "react";

/**
 * Home Page component: Displays a stub for Athigaaram selection and Kural preview section.
 * PUBLIC_INTERFACE
 */
function Home() {
  return (
    <div className="hero">
      <div className="subtitle">Welcome to ThirukkuralLearnHub</div>
      <h1 className="title">Home</h1>
      <div className="description">
        Explore Athigaarams and Kurals. (Feature coming soon)
      </div>
      <button className="btn btn-large" disabled>
        Demo Button
      </button>
    </div>
  );
}

export default Home;
