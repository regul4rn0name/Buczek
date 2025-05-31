export default function OfferComponent({offer}){
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
        <div className="flex flex-row h-98 w-[22rem] mx-2  bg-white rounded-2xl  border-solid border-cyan-600 border-3">
            <section className="w-1/2 rounded-l-xl flex flex-col text-center text-wrap px-3">
                <h1 className="text-xl font-medium mt-3 text-cyan-600 font-ubuntu">{offer.title}</h1>
                <br />
                <h2 className="text-cyan-900 font-ubuntu">{offer.description}</h2>
                <br />
                <h3 className="mt-10 text-cyan-600 font-ubuntu text-[18px]">{offer.price} zł</h3>
                <button onClick={singup} className="border-3 border-black rounded-full mb-5 hover:border-stone-600 hover:bg-stone-600 hover:text-white duration-25 font-ubuntu">Zapisz się</button>
            </section>
            <img className="w-2/4 bg-cover bg-center rounded-xl" src={`https://admin.bumasport.pl/server${offer.image}`}/>
            
        </div>
    )
}