"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  alternateText?: string;
  className?: string;
}

export function GlitchText({ text, alternateText, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });
  const [clipPath, setClipPath] = useState("inset(0 0 0 0)");
  const [currentText, setCurrentText] = useState(text);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Trigger glitch effect
      setIsGlitching(true);

      // Create random glitch animations
      const glitchDuration = 400; // 400ms of glitching
      const glitchSteps = 8;
      const stepDuration = glitchDuration / glitchSteps;

      for (let i = 0; i < glitchSteps; i++) {
        setTimeout(() => {
          // Random offsets for position
          const x = Math.random() * 8 - 4; // -4 to 4
          const y = Math.random() * 8 - 4;
          setGlitchOffset({ x, y });

          // Random clip paths for fragmented look
          const top = Math.floor(Math.random() * 50);
          const bottom = Math.floor(Math.random() * 50);
          setClipPath(`inset(${top}% 0 ${bottom}% 0)`);
        }, i * stepDuration);
      }

      // Reset after glitch and switch text if alternateText is provided
      setTimeout(() => {
        setIsGlitching(false);
        setGlitchOffset({ x: 0, y: 0 });
        setClipPath("inset(0 0 0 0)");

        if (alternateText) {
          setCurrentText(prev => prev === text ? alternateText : text);
        }
      }, glitchDuration);
    }, 3000); // Glitch every 3 seconds

    return () => clearInterval(glitchInterval);
  }, [text, alternateText]);

  return (
    <span className={`glitch-container inline-block relative ${className}`}>
      {/* Main text */}
      <span
        className="glitch-main relative inline-block transition-transform duration-75"
        style={{
          transform: isGlitching
            ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`
            : "translate(0, 0)",
        }}
      >
        {currentText}
      </span>

      {/* Glitch layer 1 - Cyan */}
      <span
        className="glitch-layer absolute top-0 left-0 pointer-events-none select-none opacity-0"
        style={{
          color: "oklch(0.7 0.2 200)",
          opacity: isGlitching ? 0.8 : 0,
          transform: isGlitching
            ? `translate(${glitchOffset.x - 3}px, ${glitchOffset.y + 2}px)`
            : "translate(0, 0)",
          clipPath: clipPath,
          transition: "opacity 75ms, transform 75ms, clip-path 75ms",
        }}
        aria-hidden="true"
      >
        {currentText}
      </span>

      {/* Glitch layer 2 - Red */}
      <span
        className="glitch-layer absolute top-0 left-0 pointer-events-none select-none opacity-0"
        style={{
          color: "oklch(0.7 0.2 350)",
          opacity: isGlitching ? 0.8 : 0,
          transform: isGlitching
            ? `translate(${glitchOffset.x + 3}px, ${glitchOffset.y - 2}px)`
            : "translate(0, 0)",
          clipPath: clipPath,
          transition: "opacity 75ms, transform 75ms, clip-path 75ms",
        }}
        aria-hidden="true"
      >
        {currentText}
      </span>

      {/* Glitch layer 3 - Green */}
      <span
        className="glitch-layer absolute top-0 left-0 pointer-events-none select-none opacity-0"
        style={{
          color: "oklch(0.7 0.2 140)",
          opacity: isGlitching ? 0.6 : 0,
          transform: isGlitching
            ? `translate(${glitchOffset.x + 2}px, ${glitchOffset.y + 3}px)`
            : "translate(0, 0)",
          clipPath: clipPath,
          transition: "opacity 75ms, transform 75ms, clip-path 75ms",
        }}
        aria-hidden="true"
      >
        {currentText}
      </span>
    </span>
  );
}
