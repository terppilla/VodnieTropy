import { formFields, buttons } from "../data"
import GreenButton from '../components/Buttons.jsx'
import '../components-style/Form.css'

export default function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно добавить логику отправки данных на сервер
        console.log("Форма отправлена!");
    }
return (
    <form className="form" onSubmit={handleSubmit}>
        <p className="form-description">Закажите звонок и мы перезвоним вам в ближайшее время</p>
        <div className="form-fields-wrapper">
            {formFields.map((item) => (
                <input className="form-field"
                 key={item.index} 
                 id={item.id}
                 type={item.type}
                 placeholder={item.placeholder} 
                 pattern={item.pattern} required />
            ))}
        </div>
        <div className="form-bottom">
        <div className="checkbox-wrapper">
        <input type="checkbox" id="checkbox" required />
           <label htmlFor="checkbox">
           Согласен(на) на обработку персональных даннных
           </label>
        </div>
       <div className="green-button-wrapper">
        <button className="green-button" type="submit">Заказать звонок</button>
       </div>
        </div>

    </form>
)
}

