import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  delay?: number;
}

const TypewriterText = ({
  text,
  speed = 80,
  className = "",
  showCursor = true,
  delay = 0,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, text, speed, hasStarted]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: isTyping ? 1 : [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: isTyping ? 0 : Infinity,
            repeatType: "reverse",
          }}
          className="inline-block ml-1 w-0.5 h-[1em] bg-current align-middle"
        />
      )}
    </span>
  );
};

export default TypewriterText;
