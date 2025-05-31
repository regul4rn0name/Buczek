import Headerimg from "/Header-img.webp"

export default function Header({ onOfertsClick }){



    return(
        
        <div style={{ backgroundImage: `url(${Headerimg})` }} className="bg-cover bg-center h-screen w-full">
            <section className="flex justify-self-end flex-col h-1/2">
                <div className="text-white flex top-5 justify-end space-x-5 p-8 text-lg font-medium md:text-2xl">
                    <button onClick={()=>onOfertsClick(2)} className=" hover:text-cyan-600">O mnie</button>
                    <button onClick={()=>onOfertsClick(0)} className="hover:text-cyan-600">Oferty</button>
                    <button onClick={()=>onOfertsClick(1)} className="hover:text-cyan-600">Wydarzenia</button>
                </div>

                <div className="text-white absolute flex top-70 right-5 flex-col justify-self-end mt-15 lg:right-50">
                    <h1 className = "text-5xl font-bold md:text-7xl">Buma Sport</h1>
                    <h3 className="text-1xl font-semibold md:text-2xl">Time to level up!</h3>
                </div>
            </section>
        </div>
    )
}