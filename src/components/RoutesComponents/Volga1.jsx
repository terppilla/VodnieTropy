import { volga, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";

export default function VolgaPage1() {
    return (
        <section className="card-info">
        <Header />
        <VolgaComponent1 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}

function VolgaComponent1() {
    const volga1 = volga[0];

    const handleClick = (e, elementToScroll) => {
        if (to === '/volga1/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{volga1.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={volga1.src} alt={volga1.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[volga1.day1, volga1.day2, volga1.day3, volga1.day4, volga1.day5, volga1.day6, volga1.day7].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/volga1/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                 <p>{volga1.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}