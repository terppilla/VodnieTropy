import { volga, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";

export default function VolgaPage2() {
    return (
        <section className="card-info">
        <Header />
        <VolgaComponent2 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}

function VolgaComponent2() {
    const volga2 = volga[1];

    const handleClick = (e, elementToScroll) => {
        if (to === '/volga2/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{volga2.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={volga2.src} alt={volga2.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[volga2.day1, volga2.day2, volga2.day3, volga2.day4, volga2.day5, volga2.day6, volga2.day7].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/volga2/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                 <p>{volga2.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}