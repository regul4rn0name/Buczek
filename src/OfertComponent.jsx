export default function Ofer_element(){
    return(
        <div className="flex flex-row h-96 w-96 mx-2  bg-white rounded-2xl  border-solid border-cyan-600 border-3">
            <section className="w-1/2 rounded-l-xl flex flex-col text-center text-wrap px-3">
                <h1 className="text-xl font-medium mt-3 ">Lekcja</h1>
                <br />
                <h2>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.</h2>
                <br />
                <h3 className="mt-10 text-[18px]">34zl</h3>
            </section>
            <section className="w-2/4 bg-[url('tenis.jpg')] bg-cover bg-center rounded-xl">
            </section>
        </div>
    )
}