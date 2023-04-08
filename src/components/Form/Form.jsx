import ComboBox from '../ComboBox/ComboBox';
import { InsuranceContext } from '../../utils/InsuranceContext';
import "./form.styles.css";
import { useState, useContext } from 'react';
import { filterByCategory } from '../../utils/functions';

function Form() {
    const insurance = useContext(InsuranceContext);
    const [properties, locations] = filterByCategory(insurance);
    const [property, setProperty] = useState({ type: '', factor: '' });
    const [location, setLocation] = useState({ type: '', factor: '' });
    const [mts2, setMts2] = useState(0);
    



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(property,location,mts2);
    }

    return (

        <form onSubmit={handleSubmit}>
            <label>
                <h3>Selecciona el tipo de propiedad</h3>
                <ComboBox props={properties} value={property.factor} onChange={(factor, type) => setProperty({ type: type, factor: factor })} />
            </label>
            <label>
                <h3>Selecciona su ubicación</h3>
                <ComboBox props={locations} value={location.factor} onChange={(factor, type) => setLocation({ type: type, factor: factor })} />
            </label>
            <h3>Ingresa los Metros cuadrados:</h3>
            <input type="number" min="20" max="500" required onChange={(e) => setMts2(e.target.value)} />
            <button type="submit">COTIZAR</button>
        </form>
    )
}

export default Form