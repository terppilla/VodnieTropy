import { bigFeature, features } from "../data";
import '../components-style/Features.css'
import '../App.css'
import H2Titles from "./Titles";


export default function Features() {
    return (
      <div className="gray-bg">
         <section className="features container">
            <H2Titles type="featureType" />
         <ul className="feature-items">
            <div className="big-feature-wrapper">
                   <li className="big-feature feature-item">
                   <h3>{bigFeature.title}</h3>
                    <p>{bigFeature.content}</p>
                   </li>
            </div>
            <div className="small-features-wrapper">
            {features.map((item) => (
                 <li key={item.id} className="feature-item">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                </li>
            ))}
              </div>
        </ul>
       </section>
      </div>
    )
}