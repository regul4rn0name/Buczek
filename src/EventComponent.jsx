import axios from "axios";

export default function EventComponent({event,getEvents}){
    const remove = async ()=>{
        try {
             await axios.post("https://admin.bumasport.pl/server/deleteEvent",{event:event},{withCredentials:true});
             getEvents();

        } catch (error) {
            console.error(error);
            alert("Wystąpił błąd");
            
        }
    }
    return(
        <div className="flex flex-col text-white">
            <img src={`https://admin.bumasport.pl/server${event.image}`} className="w-80 h-96"/>
            <h3 className="text-[18px] font-ubuntu italic text-left">{event.title}</h3>
            <h4 className=" font-ubuntu italic">{event.description}</h4>
            <h4 className=" font-ubuntu italic">Do: {event.duration}</h4>
            <button onClick={remove}>Usuń</button>
        </div>
    );
}