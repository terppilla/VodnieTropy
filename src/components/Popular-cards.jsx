import { popularCads, titles } from "../data";
import '../components-style/Cards.css'
import H2Titles from "./Titles";
import { Link } from "react-router-dom";

export default function Popularcards() {
    return (
       <section id="popularCards" className="cards gray-bg">
        <H2Titles type="cardsType" />
         <ul className="container card-items">
         {popularCads.map((item) => (
             <li key={item.id} className="card-item">
            <div className="card-img-wrapper">
                <img src={item.img} alt={item.alt} />
            </div>
            <div className="card-text-wrapper">
                <h3 className="card-title">{item.title}</h3>
                <div className="duration-wrapper">
                <p className="card-route">{item.route}</p>
                </div>
                <p className="card-duration">{item.duration}</p>
                <div className="card-bottom">
                <Link to={item.to} className="card-btn green-button">
                        {item.btnText}
                    </Link> 
                <p className="card-price">{item.price}</p>
                </div>
            </div>
             </li>
         ))}

        </ul>
       </section>
    )
}