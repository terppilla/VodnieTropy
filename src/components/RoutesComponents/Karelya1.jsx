import { karelya, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts"
import { Link } from "react-router-dom";

export default function KarelyaPage1() {
    return (
        <section className="card-info">
        <Header />
        <KarelyaComponent1 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}

function KarelyaComponent1() {
    const karelya1 = karelya[0];

    const handleClick = (e, elementToScroll) => {
        if (to === '/karelya1/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{karelya1.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={karelya1.src} alt={karelya1.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[karelya1.day1, karelya1.day2, karelya1.day3, karelya1.day4].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/karelya1/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                 <p>{karelya1.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}