import AboutBottomRight from "./AboutBottomRight";
import AboutLeft from "./AboutLeft";
import AboutUpperRight from "./AboutUpperRight";

export default function About(){
    return(
        <div className="w-full h-fit mt-10 grid grid-cols-2 grid-rows-2">
            <AboutLeft/>
            <AboutUpperRight/>
            <AboutBottomRight/>
        </div>
        
    );
}