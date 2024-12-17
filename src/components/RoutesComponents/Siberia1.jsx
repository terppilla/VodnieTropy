import { siberia, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";


export default function SiberiaPage1() {
    return (
        <section className="card-info">
        <Header />
        <SiberiaComponent1 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}


function SiberiaComponent1() {
    const siberia1 = siberia[0];

    const handleClick = (e, elementToScroll) => {
        if (to === '/siberia1/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{siberia1.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={siberia1.src} alt={siberia1.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[siberia1.day1, siberia1.day2, siberia1.day3, siberia1.day4, siberia1.day5].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/siberia1/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                     <p>{siberia1.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}