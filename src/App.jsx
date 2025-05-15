import { useRef, React } from "react";

import Header from "./Header"
import Oferts from "./Oferts"

function App() {
  const Ref = useRef([]);

  const ensureRef =(index)=> (el) => {
    
      Ref.current[index] = el;
    
  };

  const scrollToOferts = (index) => {
    Ref.current[index]?.scrollIntoView({ behavior: "smooth" });
    console.log(Ref.current[0]);
  };


  return (
    <>
      <Header onOfertsClick={scrollToOferts}/>
      <div ref={ensureRef(0)}>
        <Oferts/>
      </div>
    </>
  )
}

export default App
