import React from "react";
import "../App.css";

/**
 * Card component for card-style content sections (Kurals, quiz questions, etc.)
 * PUBLIC_INTERFACE
 */
function Card({ children, style, className }) {
  return (
    <div className={`kural-card${className ? " " + className : ""}`} style={style}>
      {children}
    </div>
  );
}

export default Card;
