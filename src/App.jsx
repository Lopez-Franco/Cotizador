import ComboBox from './ComboBox';
import { useGet } from './utils/api/api';
import { Cotizador } from './class/Cotizador'
import { useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom';
function App() {
  const [property, setProperty] = useState({type:'',factor:''});
  const [location, setLocation] = useState({type:'',factor:''});
  const [mts2, setMts2] = useState(0);
  const priceRef = useRef();
  const saveRef = useRef();
  const [data, error, isLoading] = useGet();
  const properties = [];
  const locations = [];

  data.forEach((e) => {
    if (e.category === 'ubicacion') {
      locations.push({
        id: e.id,
        type: e.type,
        factor: e.factor
      })
    } else {
      properties.push({
        id: e.id,
        type: e.type,
        factor: e.factor
      })
    }
  });

function isDefault(object){
  return object.type === '' && object.factor === '';
}
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isDefault(property) && !isDefault(location)) {
      const button = event.target.querySelector('button');
      button.className = 'spinner';
      button.textContent = '';
      setTimeout(() => {
        let cotizador = new Cotizador(undefined, property.factor, location.factor, mts2);
        priceRef.current.textContent = cotizador.cotizarPoliza();
        button.className = '';
        button.textContent = 'COTIZAR';
        saveRef.current.style.display = 'inline-block';
      }, 1000);

    } else {
      alert('Por favor, selecciona una opción en ambos combobox.');
    }
  }
  const saveLocal = () => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    const cotizacion = {
      date: new Date().toLocaleString(),
      property: property.type,
      location: location.type,
      mts2: mts2,
      import: priceRef.current.textContent
    }
    history.push(cotizacion);
    localStorage.setItem('history', JSON.stringify(history));
    saveRef.current.style.display = 'none';
  }
  if (error) return <span><h1>Algo malio sal 🤯</h1></span>
  if (isLoading) return <span><h1>Cargando...</h1></span>
  return (
    <div>
      <Link to="/history">History</Link>
      <h1>Seguros del hogar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Selecciona el tipo de propiedad</h3>
          <ComboBox props={properties} value={property.factor} onChange={(factor,type) => setProperty({type:type,factor:factor})} />
        </label>
        <label>
          <h3>Selecciona su ubicación</h3>
          <ComboBox props={locations} value={location.factor} onChange={(factor,type) => setLocation({type:type,factor:factor})} />
        </label>
        <h3>Ingresa los Metros cuadrados:</h3>
        <input type="number" min="20" max="500" required onChange={(e) => setMts2(e.target.value)} />
        <button type="submit">COTIZAR</button>
      </form>
      <div>
        <p>Precio estimado: $
          <span ref={priceRef}>0.00</span>
          <span ref={saveRef} title="Guardar en historial" onClick={saveLocal} style={{ display: 'none' }}>💾</span>
        </p>
      </div>
      <Outlet />
    </div>
  );
}


export default App;
