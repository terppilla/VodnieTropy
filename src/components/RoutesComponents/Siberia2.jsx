import { siberia, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";


export default function SiberiaPage2() {
    return (
        <section className="card-info">
        <Header />
        <SiberiaComponent2 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}

function SiberiaComponent2() {
    const siberia2 = siberia[1];

    const handleClick = (e, elementToScroll) => {
        if (to === '/siberia2/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{siberia2.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={siberia2.src} alt={siberia2.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[siberia2.day1, siberia2.day2, siberia2.day3, siberia2.day4].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/siberia2/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                   <p>{siberia2.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}