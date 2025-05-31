import { useState,useEffect } from "react";
import axios from "axios";

export default function useFetchData(){
      const [offers,setOffers] = useState([]);
      const [events,setEvents] = useState([]);
       
          useEffect(()=>{
            const fetchData = async ()=>{
                try {
                    const [offersRes,eventsRes] = await Promise.all([
                        axios.get("https://www.bumasport.pl/server/offers"),
                        axios.get("https://www.bumasport.pl/server/events"),
                        
                    ])
                    if (offersRes.data) setOffers(offersRes.data);
                    if (eventsRes.data) setEvents(eventsRes.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            fetchData();
          },[])
          return {offers,events}
}