import { karelya, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link } from "react-router-dom";


export default function KarelyaPage3() {
    return (
        <section className="card-info">
        <Header />
        <KarelyaComponent3 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}


function KarelyaComponent3() {
    const karelya3 = karelya[2];

    const handleClick = (e, elementToScroll) => {
        if (to === '/karelya3/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{karelya3.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={karelya3.src} alt={karelya3.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[karelya3.day1, karelya3.day2, karelya3.day3, karelya3.day4].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/karelya3/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                <p>{karelya3.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}