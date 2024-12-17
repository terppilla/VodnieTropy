import {karelyaCards, titles } from "../data";
import '../components-style/Cards.css'
import H2Titles from "./Titles";
import Header from "./Header";
import Contacts from "./Contacts";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Karelya() {
    return (
        <>
        <Header />
        <KarelyaCards />
        <Contacts />
        <Footer />
      </>
    )
}

 function KarelyaCards() {
    return (
       <section className="other-cards cards gray-bg">
        <H2Titles type="karelyaCardsType" />
         <ul className="container card-items">
         {karelyaCards.map((item) => (
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