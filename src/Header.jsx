export default function Header(){
    return(
        <div className="bg-[url('Header-img.jpg')] bg-cover bg-center h-screen w-full">
            <section className="flex justify-self-end flex-col h-1/2">
                <div className="text-white flex justify-end space-x-5 p-8">
                    <button>O mnie</button>
                    <button>Oferty</button>
                    <button>Wydarzenia</button>
                    <button>Umów się</button>
                </div>

                <div className="text-white flex flex-col justify-self-center mt-15">
                    <h1 className = "text-4xl font-bold">Buma Sport</h1>
                    <h3 className="text-1xl font-semibold">Tipe to level up!</h3>
                </div>

            </section>
        </div>
    )
}