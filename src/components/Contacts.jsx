import Form from "./Form";
import '../components-style/Contacts.css'
import { socials} from "../data";
import H2Titles from "./Titles";

export default function Contacts() {
    return (
        <section id="form" className="contacts gray-bg">
            <div className="container">
            <H2Titles type="formType" />
            <Form />
            <ul className="social-items">
                {socials.map((item) => (
                    <li key={item.id} className="social-item">
                     <a href={item.href}>
                     <img src={item.src} alt={item.alt} />
                     </a>
                    </li>
                ))}
            </ul>
            </div>
        </section>        
    )
}