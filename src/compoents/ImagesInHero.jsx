import img from "../assets/hero-image-Bt0boXPc.jpg"
import "../Styles/ImagesInHero.css"
export default function ImagesinHero(){



    return(
        <>
        <div className="ImagesConatiner">
            <img src={img} alt="HeroImages"/>
            <div className="Minicontainer">
                <p>98% Success Rate <br /> Job Applications</p>
            </div>
        </div>
        </>
    )
}