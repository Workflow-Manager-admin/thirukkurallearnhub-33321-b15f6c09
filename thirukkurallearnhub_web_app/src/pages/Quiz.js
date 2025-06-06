import React from "react";
import Card from "../components/Card";
import { demoQuizQuestions } from "../data";

/**
 * Quiz Page component: Contains a card-style interactive quiz (stub content for mobile-friendly preview).
 * PUBLIC_INTERFACE
 */
function Quiz() {
  // Use the first demo question for preview
  const demoQuiz = demoQuizQuestions[0];

  return (
    <div>
      <div className="hero" style={{ paddingBottom: 30 }}>
        <div className="subtitle">Test Your Knowledge!</div>
        <h1 className="title" style={{ marginBottom: 14 }}>Quiz</h1>
        <div className="description">
          Try the Thirukkural quiz. (Demo UI)
        </div>
      </div>
      <div className="quiz-card-list" style={{ marginTop: 8 }}>
        <Card className="quiz-card">
          <div className="kural-card-tamil" style={{ marginBottom: 8 }}>
            {demoQuiz.tamil}
          </div>
          <div className="kural-card-explanation" style={{ fontWeight: 600 }}>
            {demoQuiz.question}
          </div>
          <div>
            {demoQuiz.options.map((opt, idx) => (
              <button
                key={idx}
                className="quiz-option-btn"
                tabIndex={0}
                disabled
                style={{ marginRight: 10 }}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="quiz-feedback-correct" style={{ marginTop: 10 }}>
            Correct answer: {demoQuiz.options[demoQuiz.correct]}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Quiz;
