import { siberia, buttons } from "../../data";
import Header from "../Header";
import FAQ from "../FAQ";
import Footer from "../Footer";
import '../../components-style/CardInfo.css'
import '../../App.css'
import Contacts from "../Contacts";
import { Link} from "react-router-dom";


export default function SiberiaPage3() {
    return (
        <section className="card-info">
        <Header />
        <SiberiaComponent3 />
        <FAQ />
        <Contacts />
        <Footer />
        </section>
    )
}

function SiberiaComponent3() {
    const siberia3 = siberia[2];

    const handleClick = (e, elementToScroll) => {
        if (to === '/siberia3/#form') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    return (
        <div className="card-info-box container"> 
        <h3 className="card-info-title">{siberia3.title}</h3>
        <div className="card-info-wrapper">
            <div className="card-info-img">
                <img src={siberia3.src} alt={siberia3.alt} />
            </div>
        
        <div className="card-info-text">
            <ul className="card-info-items">
            {[siberia3.day1, siberia3.day2, siberia3.day3, siberia3.day4, siberia3.day5, siberia3.day6, siberia3.day7].map((day, index) => (
            <li key={index} className="card-info-item">
             <p>
                 <strong>{day[0].dayNumber}</strong>{day[1].text}
            </p>
            </li>
            ))}
            </ul>
            <div className="card-info-bottom">
            <Link   className='green-button'
                    to='/siberia3/#form'
                    onClick={(e) => handleClick(e, 'form')}
                >
                    {buttons[2].content}
                </Link>                   <p>{siberia3.price}</p>
            </div>
        </div>
        </div>    
        </div>
    )
}