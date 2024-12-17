import Accordion from "./Accordion";
import '../components-style/FAQ.css'
import { faq } from "../data";
import H2Titles from './Titles'
import FirstFaq from "./FirstFaq"

const answerComponents = {
    FirstFaq: <FirstFaq />,
}

export default function FAQ() {
    return (
       <section id="faq" className="container faq-container">
        <H2Titles type="faqType" />
         <div className="faq-wrapper">
            {faq.map((item) => {
        const answer = answerComponents[item.answer] || item.answer
           
            return (
                <Accordion key={item.id} question={item.question} answer={answer} />
            )
        })} 
        </div>
       </section>
    )
}