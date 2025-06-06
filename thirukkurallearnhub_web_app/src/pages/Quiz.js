import React, { useState } from "react";
import Card from "../components/Card";
import { demoQuizQuestions } from "../data";

/**
 * Quiz Page component: Interactive Thirukkural quiz with stateful logic,
 * selects answers, shows feedback, mobile-first card rendering.
 * PUBLIC_INTERFACE
 */
function Quiz() {
  const [currentIdx, setCurrentIdx] = useState(0); // Current quiz Q
  const [selected, setSelected] = useState(null);  // null, or option idx
  const [showFeedback, setShowFeedback] = useState(false);

  const question = demoQuizQuestions[currentIdx];

  const handleOptionClick = idx => {
    // Don't allow reselection after feedback is shown.
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIdx + 1 < demoQuizQuestions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      // Simple end state – show a message or reset
      setShowFeedback(false);
      setSelected(null);
      setCurrentIdx(0);
    }
  };

  const isCorrect = selected === question.correct && showFeedback;
  const isWrong = selected !== null && selected !== question.correct && showFeedback;

  return (
    <div>
      <div className="hero" style={{ paddingBottom: 30 }}>
        <div className="subtitle">Test Your Knowledge!</div>
        <h1 className="title" style={{ marginBottom: 14 }}>Quiz</h1>
        <div className="description">
          Try the Thirukkural quiz. Select the correct answer for each Kural. Get instant feedback and move to the next!
        </div>
      </div>
      <div className="quiz-card-list" style={{ marginTop: 8 }}>
        <Card className="quiz-card">
          <div className="kural-card-tamil" style={{ marginBottom: 8 }}>
            {question.tamil}
          </div>
          <div className="kural-card-explanation" style={{ fontWeight: 600 }}>
            {question.question}
          </div>
          <div>
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                className={
                  "quiz-option-btn" +
                  (selected === idx ? " selected" : "")
                }
                tabIndex={0}
                disabled={showFeedback}
                style={{
                  marginRight: 10,
                  outline: selected === idx ? "2.5px solid #b88750" : undefined
                }}
                onClick={() => handleOptionClick(idx)}
              >
                {opt}
              </button>
            ))}
          </div>
          {/* Feedback */}
          {showFeedback && (
            <div
              style={{
                marginTop: 14,
                minHeight: 26,
                fontWeight: "bold",
              }}
            >
              {isCorrect && (
                <span className="quiz-feedback-correct">
                  ✓ Correct! {question.explanation && (
                    <span style={{fontWeight:400, marginLeft:8, color:"var(--text-secondary)"}}>{question.explanation}</span>
                  )}
                </span>
              )}
              {isWrong && (
                <span className="quiz-feedback-incorrect">
                  ✗ Incorrect.
                  <span style={{marginLeft:8, color:"var(--text-secondary)", fontWeight:400}}>
                    {question.explanation}
                  </span>
                </span>
              )}
              {!isCorrect && !isWrong && <span>&nbsp;</span>}
            </div>
          )}
          {/* Next button */}
          <div style={{ marginTop: showFeedback ? 18 : 0 }}>
            {showFeedback && (
              <button
                className="btn btn-large"
                onClick={handleNext}
                autoFocus
                style={{
                  background: "var(--accent-color)",
                  color: "#fff",
                }}
              >
                {currentIdx + 1 < demoQuizQuestions.length ? "Next Question" : "Restart"}
              </button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Quiz;
