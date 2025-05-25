import axios from "axios";
import { useEffect, useState } from "react";
import EventComponent from "./EventComponent";
import OfertComponent from "./OfferComponent";

export default function AdminPanel() {
    const [offer, setoffer] = useState({ title: "", description: "", price: 0, image: "" });
    const [event, setEvent] = useState({ title: "", description: "", duration: "", image: "" });
    const [events, setEvents] = useState([]);
    const [offers, setoffers] = useState([]);
    const handleofferChange = (e) => {
        const { name, value } = e.target;
        setoffer(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleEventChange = (e) => {
        const { name, value } = e.target;
        setEvent(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const addoffer = async () => {
        const formData = new FormData();
        formData.append("title", offer.title);
        formData.append("description", offer.description);
        formData.append("price", offer.price);
        formData.append("image", offer.image);
        
        try {
            await axios.post(`https://admin.bumasport.pl/server/addoffer`, formData, {
                withCredentials: true, headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            getoffers();
            alert("Pomyślnie dodano");
        } catch (error) {
            console.error(error);
            alert("Wystąpił Błąd");
        }

    }
    const addEvent = async () => {
        const formData = new FormData();
        formData.append("title", event.title);
        formData.append("description", event.description);
        formData.append("duration", event.duration);
        formData.append("image", event.image);

        try {
            await axios.post(`https://admin.bumasport.pl/server/addevent`, formData, { withCredentials: true,headers:{"Content_Type":"multipart/form-data"} });
            getEvents();
            alert("Pomyślnie dodano");
        } catch (error) {
            console.error(error);
            alert("Wystąpił Błąd");
        }

    }
    const getEvents = async () => {
        try {
            const res = await axios.get("https://www.bumasport.pl/server/events");
            if (res.data) {
                setEvents(res.data);
            }
        } catch (error) {
            console.error(error);

        }
    }
    const getoffers = async () => {
        try {
            const res = await axios.get("https://www.bumasport.pl/server/offers");
            if (res.data) {
                setoffers(res.data);
            }
        } catch (error) {
            console.error(error);

        }
    }
    useEffect(() => {
        getoffers();
        getEvents();
    }, [])
    return (
        <>
            <div className="text-white grid grid-cols-2 gap-5 mt-25">
                <div className="bg-stone-600 w-fit h-fit p-5 flex flex-col justify-center items-center rounded-4xl gap-5">
                    <h1>Dodaj Ofertę</h1>
                    <input placeholder="Nazwa" name="title" value={offer.title} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleofferChange} />
                    <input placeholder="Opis" name="description" value={offer.description} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleofferChange} />
                    <input placeholder="Cena (liczba)" name="price" value={offer.price} className="bg-stone-700 rounded-xl pl-2 h-8 " type="number" onChange={handleofferChange} />
                    <input className="bg-stone-700 rounded-xl placeholder:pl-3 w-22 h-8 " type="file" accept="image/*" onChange={(e) => setoffer((prev) => ({ ...prev, image: e.target.files[0] }))} />
                    <button className="bg-stone-700 rounded-xl w-[80%] hover:bg-stone-500 duration-25 h-8" onClick={addoffer}>Dodaj</button>
                </div>
                <div className="bg-stone-600 w-fit h-fit p-5 flex flex-col justify-center items-center rounded-4xl gap-5">
                    <h1>Dodaj Wydarzenie</h1>
                    <input placeholder="Nazwa" name="title" value={event.title} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleEventChange} />
                    <input placeholder="Opis" name="description" value={event.description} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleEventChange} />
                    <label>
                        <input name="duration" value={event.duration} className="bg-stone-700 rounded-xl pl-2 h-8 " type="date" onChange={handleEventChange} />
                    </label>
                    <input className="bg-stone-700 rounded-xl placeholder:pl-3 w-22 h-8 " type="file" accept="image/* " onChange={(e)=>setEvent((prev)=>({...prev,image:e.target.files[0]}))} />
                    <button className="bg-stone-700 rounded-xl w-[80%] hover:bg-stone-500 duration-25 h-8" onClick={addEvent}>Dodaj</button>
                </div>

            </div>
            <div className="bg-stone-600 w-[80%] h-fit p-5 flex flex-col justify-center items-center rounded-4xl gap-5 text-white mt-10">
                <h1>Wydarzenia</h1>
                <div className="grid grid-cols-4 gap-5">
                    {events.map((event) => (
                        <EventComponent event={event} key={event._id} getEvents={getEvents} />
                    ))}
                </div>
            </div>
            <div className="bg-stone-600 w-[80%] h-fit p-5 flex flex-col justify-center items-center rounded-4xl gap-5 text-white mt-10">
                <h1>Oferty</h1>
                <div className="grid grid-cols-4 gap-5">
                    {offers.map((offer) => (
                        <OfertComponent offer={offer} key={offer._id} getoffers={getoffers} />
                    ))}
                </div>
            </div>
        </>
    );
}