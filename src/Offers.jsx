import OfferComponent from "./OfferComponent";
import Header from "./Header";
import React, { useRef, useEffect, useState } from "react";

export default function Offers({offers}) {


  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;

      const childWidth = container.children[0]?.offsetWidth || 0;
      const nextIndex = (currentIndex + 1) % offers.length;

      container.scrollTo({
        left: nextIndex * childWidth,
        behavior: "smooth",
      });

      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, offers.length]);
  
  return (
    <div className="mb-5">
      <h1 className="text-5xl justify-center flex mt-5 font-medium text-cyan-600 font-ubuntu">
        Oferty
      </h1>
      <div
        className="overflow-x-auto whitespace-nowrap flex mt-9 no-scrollbar scroll-smooth"
        ref={scrollRef}
      >
        
        {offers.map((offer, index) => (
          <div key={index} className="flex flex-shrink-0">
            <OfferComponent offer={offer}/>
          </div>
        ))}
      </div>
    </div>
  );
}
