import axios from "axios";

export default function OfertComponent({offer, getoffers}){
    const removeOffer = async ()=>{
        try {
            await axios.post("http://localhost:3002/deleteoffer",{offer:offer},{withCredentials:true});
            getoffers();
        } catch (error) {
             console.error(error);
            alert("Wystąpił błąd");
        }
    }
    return(
         <div className="flex flex-col text-white">
            <img src="/example.jpeg" className="w-80 h-96"/>
            <h3 className="text-[18px]  font-ubuntu italic text-left">{offer.title}</h3>
            <h4 className="font-ubuntu italic">{offer.description}</h4>
            <h4 className="font-ubuntu italic">{offer.price} zł</h4>
            <button onClick={removeOffer}>Usuń</button>
        </div>
    )
}