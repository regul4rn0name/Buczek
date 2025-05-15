import { useRef, React } from "react";

import Header from "./Header"
import Oferts from "./Oferts"

function App() {
  const Ref = useRef([]);

  const ensureRef = (index) => {
    if (!Ref.current[index]) {
      Ref.current[index] = React.createRef();
    }
    return Ref.current[index];
  };

  const scrollToOferts = (Ref) => {
    Ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log("jajca");
  };


  return (
    <>
      <Header onOfertsClick={() => scrollToOferts(1)}/>
      <div ref={ensureRef(0)}>
        <Oferts/>
      </div>
    </>
  )
}

export default App
