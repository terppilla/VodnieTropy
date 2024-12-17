import "../components-style/Footer.css"
import { phoneNumber } from "../data"
import whiteLogo from '../../public/white-logo.svg'

export default function Footer() {
return (
    <footer className="footer">
        <div className="container">
            <div className="footer-logo">
                <img src={whiteLogo} alt="Водные тропы" />
            </div>

            <div className="footer-phone">
            <a href={phoneNumber.href} className='phone'>{phoneNumber.name}</a>
            </div>
        </div>
    </footer>
)
}