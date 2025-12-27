"use client";

import React, { useState, useEffect } from "react";
import ReactSnowfall from "react-snowfall";
import { isWinterSeason, prefersReducedMotion } from "@/lib/utils/seasonal";

interface SnowfallProps {
  enabled: boolean;
  isDarkMode: boolean;
  snowflakeCount?: number;
}

export const Snowfall = React.memo(function Snowfall({
  enabled,
  isDarkMode,
  snowflakeCount = 65,
}: SnowfallProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldRender = enabled && isWinterSeason() && !prefersReducedMotion();

  if (!shouldRender) return null;

  const adjustedCount = isMobile ? Math.floor(snowflakeCount * 0.6) : snowflakeCount;

  return (
    <ReactSnowfall
      color={isDarkMode ? "#ffffff" : "#1e40af"}
      snowflakeCount={adjustedCount}
      speed={[0.5, 1.5]}
      wind={[-0.5, 1.0]}
      radius={[0.5, 3.0]}
      rotationSpeed={[-0.5, 0.5]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
});
