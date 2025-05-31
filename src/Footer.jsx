import bumasportFacebook from "/bumasportFacebook.svg";
import bumasportInstagram from "/bumasportInstagram.svg";

export default function Footer(){
    return(
        <div>
            <hr />
            <div className="flex justify-evenly mt-5 mb-10">
                <a href="https://www.facebook.com/profile.php?id=61563765863513" target="_blank" rel="noopener noreferrer">
                    <img src={bumasportFacebook} alt="Bumasport Facebook" className="w-16 h-16 hover: transition-opacity duration-200 fill-cyan-600"/>
                </a>
                <a href="https://www.instagram.com/bumasport?igsh=MTQ1OHM3MWttYmw2Mg==" target="_blank" rel="noopener noreferrer">
                    <img src={bumasportInstagram} alt="Bumasport Facebook" className="w-16 h-16 hover: transition-opacity duration-200 fill-cyan-600"/>
                </a>
            </div>
        </div>
    )
}