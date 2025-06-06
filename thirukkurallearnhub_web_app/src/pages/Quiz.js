import React, { useState } from "react";
import Card from "../components/Card";
import { demoQuizQuestions } from "../data";

/**
 * PUBLIC_INTERFACE
 * Quiz Page component: Renders an interactive quiz UI using demoQuizQuestions,
 * with instant feedback, explanation, mobile-first card styling, and quiz navigation.
 */
function Quiz() {
  // Track which question is being shown
  const [currentIdx, setCurrentIdx] = useState(0);
  // Tracks which option the user picked for this question, if any
  const [selected, setSelected] = useState(null);
  // Show feedback and explanation only after user made a selection
  const [showFeedback, setShowFeedback] = useState(false);
  // End of quiz state (show completion message and "Restart" button)
  const [completed, setCompleted] = useState(false);

  // Out-of-bounds safety
  const validIdx =
    typeof currentIdx === "number" &&
    currentIdx >= 0 &&
    currentIdx < demoQuizQuestions.length;
  const question = validIdx ? demoQuizQuestions[currentIdx] : null;

  // Handle answer selection
  const handleOptionClick = (optionIdx) => {
    if (showFeedback || completed) return;
    setSelected(optionIdx);
    setShowFeedback(true);
  };

  // Advance to next question or reset quiz if end reached
  const handleNext = () => {
    if (currentIdx + 1 < demoQuizQuestions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      // Mark as completed and allow restart
      setCompleted(true);
    }
  };

  // Restart quiz from beginning
  const handleRestart = () => {
    setCurrentIdx(0);
    setSelected(null);
    setShowFeedback(false);
    setCompleted(false);
  };

  // Feedback correct or incorrect
  const isCorrect =
    showFeedback && selected !== null && question && selected === question.correct;
  const isIncorrect =
    showFeedback && selected !== null && question && selected !== question.correct;

  // Main page rendering
  return (
    <div>
      <div className="hero" style={{ paddingBottom: 30 }}>
        <div className="subtitle">Test Your Knowledge!</div>
        <h1 className="title" style={{ marginBottom: 14 }}>
          Quiz
        </h1>
        <div className="description">
          Try the Thirukkural quiz. Select the answer, view an explanation, and continue to next question!
        </div>
      </div>
      <div className="quiz-card-list" style={{ marginTop: 8 }}>
        <Card className="quiz-card" style={{ width: "100%" }}>
          {/* Show quiz or completed state */}
          {!completed && question && (
            <>
              <div
                className="kural-card-tamil"
                style={{
                  marginBottom: 10,
                  fontFamily: "Noto Sans Tamil, Inter, sans-serif",
                  fontSize: "1.09rem",
                  color: "#513b14",
                }}
              >
                {question.tamil}
              </div>
              <div
                className="kural-card-explanation"
                style={{ fontWeight: 600, marginBottom: 4 }}
              >
                {question.question}
              </div>
              <div style={{ marginBottom: 3 }}>
                {question.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={
                      "quiz-option-btn" +
                      (selected === idx ? " selected" : "")
                    }
                    tabIndex={0}
                    aria-pressed={selected === idx}
                    disabled={showFeedback}
                    style={{
                      marginRight: 10,
                      outline:
                        selected === idx && showFeedback
                          ? "2.5px solid #b88750"
                          : undefined,
                      boxShadow:
                        selected === idx && showFeedback
                          ? "0 0 7px #C19A6B"
                          : undefined,
                    }}
                    onClick={() => handleOptionClick(idx)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {/* Feedback block */}
              {showFeedback && (
                <div
                  style={{
                    marginTop: 16,
                    minHeight: 28,
                    width: "100%",
                  }}
                  aria-live="polite"
                >
                  {isCorrect && (
                    <span className="quiz-feedback-correct">
                      ✓ Correct!
                      {question.explanation && (
                        <span
                          style={{
                            fontWeight: 400,
                            marginLeft: 8,
                            color: "var(--text-secondary)",
                            display: "inline-block",
                          }}
                        >
                          {question.explanation}
                        </span>
                      )}
                    </span>
                  )}
                  {isIncorrect && (
                    <span className="quiz-feedback-incorrect">
                      ✗ Incorrect.
                      <span
                        style={{
                          fontWeight: 400,
                          marginLeft: 8,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {question.explanation}
                      </span>
                    </span>
                  )}
                  {!isCorrect && !isIncorrect && <span>&nbsp;</span>}
                </div>
              )}
              {/* Next/Continue button */}
              <div
                style={{ marginTop: showFeedback ? 20 : 0, minHeight: 36, width: "100%" }}
              >
                {showFeedback && (
                  <button
                    className="btn btn-large"
                    onClick={handleNext}
                    style={{
                      background: "var(--accent-color)",
                      color: "#fff",
                      marginTop: 7,
                      minWidth: 110,
                    }}
                    autoFocus
                  >
                    {currentIdx + 1 < demoQuizQuestions.length
                      ? "Next Question"
                      : "Finish Quiz"}
                  </button>
                )}
              </div>
              {/* Progress indicator, mobile-friendly */}
              <div
                style={{
                  marginTop: 8,
                  fontSize: "0.98em",
                  color: "var(--text-secondary)",
                  textAlign: "right",
                  width: "100%",
                  minHeight: 18,
                }}
              >
                Question {currentIdx + 1} of {demoQuizQuestions.length}
              </div>
            </>
          )}
          {/* Completed/Restart view */}
          {completed && (
            <div style={{ width: "100%", textAlign: "center" }}>
              <div className="kural-card-title" style={{ fontSize: "1.22rem", color: "var(--primary-color)" }}>
                Quiz Complete!
              </div>
              <div className="kural-card-explanation" style={{ margin: "10px 0 24px 0" }}>
                You've finished all questions. Try again to improve your knowledge, or revisit the Kurals and About page!
              </div>
              <button
                className="btn btn-large"
                style={{
                  background: "var(--accent-color)",
                  color: "#fff",
                  minWidth: 116,
                  fontWeight: 600,
                }}
                onClick={handleRestart}
                autoFocus
              >
                Restart Quiz
              </button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Quiz;
