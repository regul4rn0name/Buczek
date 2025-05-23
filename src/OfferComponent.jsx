export default function OfertComponent({offer}){
    const singup = ()=>{
        const popup = window.open(
            'https://zapisy.activenow.pl/buma-sport-zajecia/',
            "Zapisz Się",
            'popup=yes,width=400,heigh=200,top=100,left=100,scrollbars=yes,resizable=yes,toolbar=no,menubar=no'
        );
        if(!popup){
            alert("Okno wyskakujące jest zablokowane. Proszę zezwolić na wyświetlanie wyskakujących okien dla tej witryny.")
        } 
    }
    return(
         <div className="flex flex-col text-white">
            <img src="/example.jpeg" className="w-80 h-96"/>
            <h3 className="text-[18px]  font-ubuntu italic text-left">{offer.title}</h3>
            <h4 className="font-ubuntu italic">{offer.description}</h4>
            <h4 className="font-ubuntu italic">{offer.price} zł</h4>
        </div>
    )
}