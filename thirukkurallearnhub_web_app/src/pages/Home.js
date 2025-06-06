import React, { useState } from "react";
import Card from "../components/Card";
import { demoAthigaarams, demoKurals } from "../data";

/**
 * Home Page component: Displays mobile-friendly card sections for Athigaaram selection/Kural previews.
 * PUBLIC_INTERFACE
 */
function Home() {
  const [selectedAthigaaram, setSelectedAthigaaram] = useState(null);

  return (
    <div>
      <div className="hero" style={{ paddingBottom: 32 }}>
        <div className="subtitle">Explore Athigaarams (Chapters)</div>
        <h1 className="title" style={{ marginBottom: 14 }}>Home</h1>
        <div className="description" style={{ marginBottom: 10 }}>
          Browse key chapters from Thirukkural, select one to preview Kurals.
        </div>
      </div>
      <div className="kural-card-list">
        {demoAthigaarams.map((ath) => (
          <Card
            key={ath.id}
            style={{
              borderColor: selectedAthigaaram === ath.id ? "var(--accent-color)" : ""
            }}
            className={selectedAthigaaram === ath.id ? "card-selected" : ""}
          >
            <div className="kural-card-title" style={{ marginBottom: 6 }}>
              {ath.name}
            </div>
            <div className="kural-card-translation">{ath.descr}</div>
            <div className="card-btn-row">
              <button
                className="btn"
                onClick={() => setSelectedAthigaaram(ath.id)}
                style={{
                  background: selectedAthigaaram === ath.id ? "var(--accent-color)" : ""
                }}
              >
                {selectedAthigaaram === ath.id ? "Selected" : "View Kurals"}
              </button>
            </div>
          </Card>
        ))}
      </div>
      {selectedAthigaaram && (
        <div>
          <div className="subtitle" style={{ marginTop: 32 }}>Kurals Preview</div>
          <div className="kural-card-list">
            {(demoKurals[selectedAthigaaram] || []).map((kural) => (
              <Card key={kural.num}>
                <div className="kural-card-title">Kural {kural.num}</div>
                <div className="kural-card-tamil">{kural.tamil}</div>
                <div className="kural-card-translation">{kural.translation}</div>
                <div className="kural-card-explanation">{kural.explanation}</div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
