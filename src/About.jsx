import AboutBottomRight from "./AboutBottomRight";
import AboutLeft from "./AboutLeft";
import AboutUpperRight from "./AboutUpperRight";

export default function About(){
    return(
        <div className="w-full h-fit mt-10 grid grid-cols-2 grid-rows-2 xl:w-full xl:m-auto xl:grid-cols-5 xl:grid-rows-2 xl:pt-5">
            <AboutLeft/>
            <AboutUpperRight/>
            <AboutBottomRight/>
        </div>
        
    );
}