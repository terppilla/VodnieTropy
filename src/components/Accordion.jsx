import { useState } from "react";
import '../components-style/Accordion.css'

export default function Accordion({question, answer}) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="accordion-wrapper">
            <button className="accordion-question" onClick={() => setIsOpen(!isOpen)}>
                <span className="question-text">{question}</span>
                <span className="faq-char">{isOpen ? '-' : '+'}</span>
            </button>
            <div className={`answer-wrapper ${isOpen ? '' : 'hidden'}`}>
                <div className="accordion-answer">
                   {answer}
                </div>
            </div>
        </div>
    )
}