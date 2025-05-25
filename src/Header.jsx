export default function Header({ onOfertsClick }){
    return(
        <div className="bg-[url('Header-img.webp')] bg-cover bg-center h-screen w-full">
            <section className="flex justify-self-end flex-col h-1/2">
                <div className="text-white flex justify-end space-x-5 p-8">
                    <button onClick={()=>onOfertsClick(2)}>O mnie</button>
                    <button onClick={()=>onOfertsClick(0)}>Oferty</button>
                    <button onClick={()=>onOfertsClick(1)}>Wydarzenia</button>
                </div>

                <div className="text-white absolute flex top-25 right-25 flex-col justify-self-center mt-15">
                    <h1 className = "text-4xl font-bold">Buma Sport</h1>
                    <h3 className="text-1xl font-semibold">Time to level up!</h3>
                </div>

            </section>
        </div>
    )
}