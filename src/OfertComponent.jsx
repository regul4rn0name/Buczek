export default function Ofer_element(){
    return(
        <div className="flex flex-row h-96 w-96 mx-2  bg-blue-300 rounded-xl">
            <section className="w-1/2 rounded-l-xl flex flex-col text-center">
                <h3>Lekcja</h3>
                <br />
                <h2>Opis</h2>
                <h2>34zl</h2>
            </section>
            <section className="w-1/2 bg-[url('tenis.jpg')] bg-cover bg-center rounded-xl">
            </section>
        </div>
    )
}