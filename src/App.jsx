import About from "./About"
import Events from "./Events"


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

      <About/>
      <Events/>

    </>
  )
}

export default App
