import { karelya, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";

export default function KarelyaPage2() {
    return (
        <section className="card-info">
        <Header />
        <KarelyaComponent2 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}


function KarelyaComponent2() {
    const karelya2 = karelya[1];

    const handleClick = (e, elementToScroll) => {
        if (to === '/karelya2/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{karelya2.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={karelya2.src} alt={karelya2.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[karelya2.day1, karelya2.day2, karelya2.day3, karelya2.day4].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/karelya2/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                   <p>{karelya2.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}