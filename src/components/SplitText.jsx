import React from 'react';
import './SplitText.css'; // Create a separate CSS file for SplitText styles

function SplitText({ text }) {
  return (
    <h1 className="split-text">
      {text.split(/\s/).map((word, index) => (
        <span key={index} className="split-text-word">
          {word}
        </span>
      ))}
    </h1>
  );
}

export default SplitText;
