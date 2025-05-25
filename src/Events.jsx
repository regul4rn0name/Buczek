import EventComponent from "./EventComponent";

export default function Events({events}) {
    return (
        
        <div className="w-full flex flex-col justify-center items-center ">
            <h1 className="text-8xl text-cyan-600 m-6">wydarzenia</h1>
            <div className="w-[80vw] flex gap-10 justify-center items-center">
                {events.map((event)=>(
                    <EventComponent event={event} key={event._id}/>
                ))}
            </div>

        </div>
    );
}