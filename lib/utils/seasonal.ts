export function isWinterSeason(date: Date = new Date()): boolean {
  const month = date.getMonth();
  return month === 0 || month === 1 || month === 10 || month === 11;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
