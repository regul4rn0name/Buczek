export default function EventComponent({event}){
    return(
        <div className="flex flex-col ">
            <img src={`https://admin.bumasport.pl/server${event.image}`} className="w-80 h-96"/>
            <h3 className="text-[18px] text-cyan-900 font-ubuntu italic text-left">{event.title}</h3>
            <h4 className="text-cyan-600 font-ubuntu italic">{event.description}</h4>
            <h4 className="text-cyan-600 font-ubuntu italic">Trwa do: {event.duration}</h4>
        </div>
    );
}