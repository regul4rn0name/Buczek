export default function Ofer_element(){
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
        <div className="flex flex-row h-98 w-96 mx-2  bg-white rounded-2xl  border-solid border-cyan-600 border-3">
            <section className="w-1/2 rounded-l-xl flex flex-col text-center text-wrap px-3">
                <h1 className="text-xl font-medium mt-3 text-cyan-600 font-ubuntu">Lekcja</h1>
                <br />
                <h2 className="text-cyan-900 font-ubuntu">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.</h2>
                <br />
                <h3 className="mt-10 text-cyan-600 font-ubuntu text-[18px]">34zl</h3>
                <button onClick={singup} className="border-3 border-black rounded-full mb-5 hover:border-stone-600 hover:bg-stone-600 hover:text-white duration-25 font-ubuntu">Zapisz się</button>
            </section>
            <section className="w-2/4 bg-[url('tenis.jpg')] bg-cover bg-center rounded-xl">
            </section>
        </div>
    )
}