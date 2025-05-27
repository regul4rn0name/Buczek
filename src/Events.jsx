import EventComponent from "./EventComponent";
import React, { useRef, useEffect, useState } from "react";

export default function Events({events}) {

      const scrollRef = useRef(null);
      const [currentIndex, setCurrentIndex] = useState(0);
    
      
      useEffect(() => {
        const interval = setInterval(() => {
          const container = scrollRef.current;
          if (!container) return;
    
          const childWidth = container.children[0]?.offsetWidth || 0;
          const nextIndex = (currentIndex + 1) % events.length;
    
          container.scrollTo({
            left: nextIndex * childWidth,
            behavior: "smooth",
          });
    
          setCurrentIndex(nextIndex);
        }, 5000);
    
        return () => clearInterval(interval);
      }, [currentIndex, events.length]);

    return (
        
        <div className="w-screen flex flex-col justify-center items-center ">
            <h1 className="text-5xl justify-center flex mt-5 font-medium text-cyan-600 font-ubuntu">Wydarzenia</h1>
                 <div className="overflow-x-auto w-screen whitespace-nowrap flex mt-9 no-scrollbar scroll-smooth " ref={scrollRef}>
                    {events.map((event, index) => (
                      <div key={index} className="flex flex-shrink-0">
                        <EventComponent event={event}/>
                      </div>
                    ))}
                </div>
        </div>
    );
}