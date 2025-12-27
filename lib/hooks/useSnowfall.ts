"use client";

import { useState, useEffect } from "react";
import { isWinterSeason } from "@/lib/utils/seasonal";

export function useSnowfall() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedPreference = localStorage.getItem("snowfall");

    if (savedPreference !== null) {
      setEnabled(savedPreference === "true");
    } else {
      const defaultEnabled = isWinterSeason();
      setEnabled(defaultEnabled);
      localStorage.setItem("snowfall", String(defaultEnabled));
    }
  }, []);

  const toggleSnowfall = () => {
    if (typeof window === "undefined") return;

    const newEnabled = !enabled;
    setEnabled(newEnabled);
    localStorage.setItem("snowfall", String(newEnabled));
  };

  return { enabled, toggleSnowfall };
}
