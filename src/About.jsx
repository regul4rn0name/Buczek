import AboutBottomRight from "./AboutBottomRight";
import AboutLeft from "./AboutLeft";
import AboutUpperRight from "./AboutUpperRight";

export default function About(){
    return(
        <div className="w-full h-[614px] m-auto grid grid-cols-5 grid-rows-2">
            <AboutLeft/>
            <AboutUpperRight/>
            <AboutBottomRight/>
        </div>
        
    );
}