import About from "./About"
import Events from "./Events"
import Header from "./Header";
import Offers from "./Offers";
import axios from "axios";
import { useRef,useState,useEffect } from "react";


function App() {
  const [offers,setOffers] = useState([]);
  const [events,setEvents] = useState([]);
  const Ref = useRef([]);

  const getOffers = async ()=>{
      try {
        const res = await axios.get("https://www.bumasport.pl/server/offers");
        if(res.data){
          setOffers(res.data);
        }
      } catch (error) {
        console.error(error);
        
      }
    }
    const getEvents = async ()=>{
      try {
        const res = await axios.get("https://www.bumasport.pl/server/events");
        if(res.data){
          setEvents(res.data);
        }
      } catch (error) {
        console.error(error);
        
      }
    }
  const ensureRef =(index)=> (el) => {
    
      Ref.current[index] = el;
    
  };

  const scrollToOferts = (index) => {
    Ref.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

useEffect(()=>{
  getOffers();
  getEvents();
},[])
  return (
    <>
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
      

    </>
  )
}

export default App
