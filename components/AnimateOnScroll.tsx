"use client";

import { useInViewAnimation } from "@/hooks/useInViewAnimation";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export function AnimateOnScroll({ children, delay = 0 }: AnimateOnScrollProps) {
  const { ref, isInView } = useInViewAnimation(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
