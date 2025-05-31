export default function EventComponent({event}){
    return(
        <div className="flex flex-col w-[20.5rem] mx-2 bg-white rounded-2xl border-solid border-cyan-600 border-3 overflow-hidden">

            <img
                src={`https://admin.bumasport.pl/server${event.image}`}
                alt={event.title}
                className="w-full h-64 object-cover rounded-t-[0.8rem]"
            />

            <div className="flex flex-col px-4 py-3 text-center">
                <h1 className="text-xl font-medium text-cyan-600 font-ubuntu italic">{event.title}</h1>
                <p className="text-cyan-900 font-ubuntu italic mt-2">{event.description}</p>
                <p className="text-cyan-600 font-ubuntu italic mt-4">Trwa do: {event.duration}</p>
            </div>
        </div>
    );
}