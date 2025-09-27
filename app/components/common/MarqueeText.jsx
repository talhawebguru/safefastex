"use client";

import { useEffect, useRef } from "react";

const MarqueeText = ({ 
  speed = 30,
  className = "",
  direction = "left",
  pauseOnHover = false
}) => {
  const containerRef = useRef(null);

  // Text content with proper styling
  const textContent = (
    <>
      <div className="flex space-x-4">
        <span className="text-neutral-900 text-4xl sm:text-6xl md:text-7xl  font-bold font-['Space_Grotesk'] uppercase leading-[1.1] tracking-[-0.03em]">
        The Best 
      </span>
  <span className="text-[#39C0C8] text-4xl sm:text-6xl md:text-7xl font-bold font-['Space_Grotesk'] uppercase leading-[1.1] tracking-[-0.03em]">
         transportation
      </span>
      <span className="text-neutral-900 text-4xl sm:text-6xl md:text-7xl font-bold font-['Space_Grotesk'] uppercase leading-[1.1] tracking-[-0.03em]">
         services
      </span>
      </div>
    </>
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Add CSS animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes marquee-left {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-100%); }
      }
      @keyframes marquee-right {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(0%); }
      }
      .marquee-animate {
        animation: marquee-${direction} ${speed}s linear infinite;
      }
      .marquee-pause:hover .marquee-animate {
        animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
      }
    `;
    
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [speed, direction, pauseOnHover]);

  return (
    <div 
      ref={containerRef}
      className={`w-full h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 overflow-hidden bg-transparent relative ${className} ${pauseOnHover ? 'marquee-pause' : ''}`}
    >
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      {/* Marquee container */}
      <div className="flex items-center h-full">
        {/* First instance */}
        <div className="flex items-center whitespace-nowrap shrink-0 pr-8 sm:pr-12 md:pr-16 marquee-animate">
          {textContent}
        </div>

        {/* Second instance for seamless loop */}
        <div className="flex items-center whitespace-nowrap shrink-0 pr-8 sm:pr-12 md:pr-16 marquee-animate">
          {textContent}
        </div>

        {/* Third instance for extra smoothness */}
        <div className="flex items-center whitespace-nowrap shrink-0 pr-8 sm:pr-12 md:pr-16 marquee-animate">
          {textContent}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;