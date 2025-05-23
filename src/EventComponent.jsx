export default function EventComponent({event}){
    return(
        <div className="flex flex-col text-white">
            <img src="/example.jpeg" className="w-80 h-96"/>
            <h3 className="text-[18px] font-ubuntu italic text-left">{event.title}</h3>
            <h4 className=" font-ubuntu italic">{event.description}</h4>
        </div>
    );
}