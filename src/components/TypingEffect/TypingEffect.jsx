import React, { useState, useEffect } from "react";

const TypingEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      currentText += text[currentIndex];
      setDisplayText(currentText);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
