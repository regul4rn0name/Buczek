import axios from "axios";
import { useState } from "react";

export default function AdminPanel(){
    const [offert,setOffert] = useState({title:"",description:"",price:0,image:""});
    const [event,setEvent] = useState({title:"",description:"",duration:"",image:""});
    const handleOffertChange = (e) => {
        const { name, value } = e.target;
        setOffert(prev => ({
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
    const addOffert =async ()=>{
        try {
           await axios.post(`http://localhost:3002/addoffert`,{offert:offert},{withCredentials:true});
            alert("Pomyślnie dodano");
        } catch (error) {
            console.error(error);
            alert("Wystąpił Błąd");
        }
        
    }
    const addEvent =async ()=>{
        console.log(event);
        
        try {
           await axios.post(`http://localhost:3002/addevent`,{event:event},{withCredentials:true});
            alert("Pomyślnie dodano");
        } catch (error) {
            console.error(error);
            alert("Wystąpił Błąd");
        }
        
    }
    return(
        <div className="text-white grid grid-cols-2 gap-5">
            <div className="bg-stone-600 w-fit h-fit p-5 flex flex-col justify-center items-center rounded-4xl gap-5">
                <h1>Dodaj Ofertę</h1>
                <input placeholder="Nazwa" name="title" value={offert.title} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleOffertChange}/>
                <input placeholder="Opis" name="description" value={offert.description} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleOffertChange}/>
                <input placeholder="0" name="price" value={offert.price} className="bg-stone-700 rounded-xl pl-2 h-8 " type="number" onChange={handleOffertChange}/>
                <input className="bg-stone-700 rounded-xl placeholder:pl-3 w-22 h-8 " type="file"/>
                <button className="bg-stone-700 rounded-xl w-[80%] hover:bg-stone-500 duration-25 h-8" onClick={addOffert}>Dodaj</button>
            </div>
            <div className="bg-stone-600 w-fit h-fit p-5 flex flex-col justify-center items-center rounded-4xl gap-5">
                <h1>Dodaj Wydarzenie</h1>
                <input placeholder="Nazwa" name="title" value={event.title} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleEventChange}/>
                <input placeholder="Opis" name="description" value={event.description} className="bg-stone-700 rounded-xl pl-2 placeholder:pl-3 h-8 " type="text" onChange={handleEventChange}/>
                <label>
                    <input name="duration" value={event.price} className="bg-stone-700 rounded-xl pl-2 h-8 " type="date" onChange={handleEventChange}/>
                </label>
                <input className="bg-stone-700 rounded-xl placeholder:pl-3 w-22 h-8 " type="file"/>
                <button className="bg-stone-700 rounded-xl w-[80%] hover:bg-stone-500 duration-25 h-8" onClick={addEvent}>Dodaj</button>
            </div>
        </div>
    );
}