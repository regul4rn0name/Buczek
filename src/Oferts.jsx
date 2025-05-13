import OfertComponent from "./OfertComponent"
export default function Oferts(){
    return(
        <div className=" mb-5 ">
            <h1 className="text-black text-5xl justify-center flex mt-5 font-medium">Oferty</h1>
            <div className="overflow-x-scroll whitespace-nowrap flex flex-row mt-9 no-scrollbar">
                <div className="flex h-96">
                    <OfertComponent/>
                    <OfertComponent/>
                    <OfertComponent/>
                    <OfertComponent/>
                    <OfertComponent/>
                    <OfertComponent/>
                </div>
            </div>
        </div>
    )
}