import OfertComponent from "./OfertComponent";
import Header from "./Header";
import React, { useRef, useEffect, useState } from "react";

export default function Oferts() {
  const items = [1, 2, 3, 4, 5, 6];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const childWidth = container.children[0]?.offsetWidth || 0;
      const nextIndex = (currentIndex + 1) % items.length;

      container.scrollTo({
        left: nextIndex * childWidth,
        behavior: "smooth",
      });

      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className="mb-5">
      <h1 className="text-5xl justify-center flex mt-5 font-medium text-cyan-600 font-ubuntu">
        Oferty
      </h1>
      <div
        className="overflow-x-scroll whitespace-nowrap flex mt-9 no-scrollbar scroll-smooth"
        ref={scrollRef}
      >
        
        {items.map((item, index) => (
          <div key={index} className="flex flex-shrink-0">
            <OfertComponent />
          </div>
        ))}
      </div>
    </div>
  );
}
