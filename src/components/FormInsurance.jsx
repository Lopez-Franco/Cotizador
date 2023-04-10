import ComboBox from './ComboBox';
import { InsuranceContext } from '../utils/InsuranceContext';
import React, { useState, useContext } from 'react';
import { filterByCategory, isDefault } from '../utils/functions';
import './styles/spinner.css';
import './styles/formInsurance.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormInsurance({ saveStateInsurance }) {
  const insuranceList = useContext(InsuranceContext);
  const [properties, locations] = filterByCategory(insuranceList);
  const [property, setProperty] = useState({ type: '', factor: '' });
  const [location, setLocation] = useState({ type: '', factor: '' });
  const [mts2, setMts2] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isDefault(property) && !isDefault(location)) {
      const button = event.target.querySelector('button');
      button.className = 'spinner';
      button.variant = 'primary'
      button.textContent = '';
      setTimeout(() => {
        button.className = 'btn btn-outline-primary';
        button.textContent = 'COTIZAR';
        saveStateInsurance({
          costMts2: undefined,
          property: property,
          location: location,
          mts2: mts2
        })
      }, 1000);
    } else {
      alert('Por favor, selecciona una opción en ambos combobox.');
    }
  }

  return (
    <div className='container-formInsurance'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="propertyType">
          <Form.Label>Selecciona el tipo de propiedad </Form.Label>
          <ComboBox props={properties} value={property.factor} onChange={(factor, type) => setProperty({ type: type, factor: factor })} />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Selecciona su ubicación</Form.Label>
          <ComboBox props={locations} value={location.factor} onChange={(factor, type) => setLocation({ type: type, factor: factor })} />
        </Form.Group>
        <Form.Group controlId="squareMeters">
          <Form.Label>Ingresa los Metros cuadrados:</Form.Label>
          <Form.Control type="number" min="20" max="500" required onChange={(e) => setMts2(e.target.value)} />
        </Form.Group>
        <Button variant="outline-primary" type="submit">COTIZAR</Button>
      </Form>
    </div>
  )
}

export default FormInsurance