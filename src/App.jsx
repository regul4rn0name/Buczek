import About from "./About"
import Events from "./Events"
import Header from "./Header";
import Oferts from "./Oferts";
import { useRef } from "react";


function App() {
  const Ref = useRef([]);

  const ensureRef =(index)=> (el) => {
    
      Ref.current[index] = el;
    
  };

  const scrollToOferts = (index) => {
    Ref.current[index]?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Header onOfertsClick={scrollToOferts}/>
      <div className="mb-5" ref={ensureRef(0)}>
        <Oferts/>
      </div>
      <div className="mb-5"  ref={ensureRef(1)}>
        <Events/>
      </div>
      <div className="mb-5"  ref={ensureRef(2)}>
        <About/>
      </div>
      

    </>
  )
}

export default App
