import { volga, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";

export default function VolgaPage3() {
    return (
        <section className="card-info">
        <Header />
        <VolgaComponent3 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}

function VolgaComponent3() {
    const volga3 = volga[2];

    const handleClick = (e, elementToScroll) => {
        if (to === '/volga3/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{volga3.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={volga3.src} alt={volga3.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[volga3.day1, volga3.day2, volga3.day3, volga3.day4, volga3.day5].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/volga3/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                    <p>{volga3.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}