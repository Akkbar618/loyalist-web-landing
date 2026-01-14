import React, { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  label?: string;
  duration?: number;
  suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ end, label, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}{suffix}
      </div>
      {label && <div className="text-muted-foreground">{label}</div>}
    </div>
  );
}; 