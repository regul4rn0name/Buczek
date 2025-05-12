import OfertComponent from "./OfertComponent"
export default function Oferts(){
    return(
        <div>
            <h1 className="text-blue-700 text-4xl justify-center flex mt-5">Oferty</h1>
            <div className="overflow-x-scroll whitespace-nowrap flex flex-row mt-9">
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