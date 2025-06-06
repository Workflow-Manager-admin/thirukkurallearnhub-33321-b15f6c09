import React, { useState } from "react";
import Card from "../components/Card";

/**
 * Home Page component: Displays mobile-friendly card sections for Athigaaram selection/Kural previews.
 * PUBLIC_INTERFACE
 */
const sampleAthigaarams = [
  { id: "1", name: "Inbam (Virtue)", descr: "Path of righteousness" },
  { id: "2", name: "Porul (Wealth)", descr: "Wealth and social order" },
  { id: "3", name: "Inbam (Love)", descr: "Love and family" },
  { id: "4", name: "Education", descr: "On education and knowledge" },
  { id: "5", name: "Ascetic Virtue", descr: "Spiritual guidance" }
];
const sampleKurals = [
  {
    num: 1,
    tamil: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதலே உலகு.",
    translation: "As the letter A is the first of all letters, so the Eternal God is first in the world.",
    explanation: "All things begin from God, just as language begins with 'A'."
  },
  {
    num: 2,
    tamil: "கற்றது கைமண் அளவு, கல்லாதது உலகளவு.",
    translation: "What is learned is a mere handful; what is not learned is the size of the world.",
    explanation: "Human knowledge is finite; the unknown is vast."
  }
];

function Home() {
  const [selectedAthigaaram, setSelectedAthigaaram] = useState(null);

  return (
    <div>
      <div className="hero" style={{paddingBottom: 32}}>
        <div className="subtitle">Explore Athigaarams (Chapters)</div>
        <h1 className="title" style={{marginBottom: 14}}>Home</h1>
        <div className="description" style={{marginBottom: 10}}>
          Browse key chapters from Thirukkural, select one to preview Kurals.
        </div>
      </div>
      <div className="kural-card-list">
        {sampleAthigaarams.map((ath, idx) => (
          <Card
            key={ath.id}
            style={{
              borderColor: selectedAthigaaram===ath.id ? "var(--accent-color)" : ""
            }}
            className={selectedAthigaaram===ath.id ? "card-selected" : ""}
          >
            <div className="kural-card-title" style={{marginBottom: 6}}>
              {ath.name}
            </div>
            <div className="kural-card-translation">{ath.descr}</div>
            <div className="card-btn-row">
              <button
                className="btn"
                onClick={() => setSelectedAthigaaram(ath.id)}
                style={{
                  background: selectedAthigaaram===ath.id ? "var(--accent-color)" : ""
                }}
              >
                {selectedAthigaaram===ath.id ? "Selected" : "View Kurals"}
              </button>
            </div>
          </Card>
        ))}
      </div>
      {selectedAthigaaram && (
        <div>
          <div className="subtitle" style={{marginTop: 32}}>Kurals Preview</div>
          <div className="kural-card-list">
            {sampleKurals.map(kural => (
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
