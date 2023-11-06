import React, { useState, useEffect } from 'react';
import './TypeWriterEffect.css'; // Import the CSS file for styling

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = 100; // Adjust typing speed (milliseconds)
    
    if (currentIndex < text.length) {
      setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingInterval);
    }
  }, [currentIndex, text]);

  return (
    <div className="typewriter-container">
      <h1 className="typewriter-text">{displayedText}</h1>
    </div>
  );
};

export default TypewriterEffect;
