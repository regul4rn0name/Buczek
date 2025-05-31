<<<<<<< HEAD
=======
import About from "./About";
import Events from "./Events";
import Header from "./Header";
import Offers from "./Offers";
import Footer from "./Footer";
>>>>>>> 5848faa2aea4b853d381cc98e73a7f1455186d49
import axios from "axios";
import { useRef,useState,useEffect,lazy,Suspense } from "react";
import useFetchData from "./hooks/useFetchData";


const Header = lazy(() => import("./Header"));
const Offers = lazy(() => import("./Offers"));
const Events = lazy(() => import("./Events"));
const About = lazy(() => import("./About"));

function App() {
  const Ref = useRef([]);
  const {offers,events} = useFetchData();
 
  const ensureRef =(index)=> (el) => {
    
      Ref.current[index] = el;
    
  };

  const scrollToOferts = (index) => {
    Ref.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header onOfertsClick={scrollToOferts}/>
      <div className="mb-5" ref={ensureRef(0)}>
        <Offers offers={offers}/>
      </div>
      <div className="mb-5"  ref={ensureRef(1)}>
        <Events events={events}/>
      </div>
      <div className="mb-5"  ref={ensureRef(2)}>
        <About/>
      </div>
      <Footer/>

    </Suspense>
  )
}

export default App
