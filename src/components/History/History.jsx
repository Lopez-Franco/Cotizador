import { Link } from "react-router-dom"
import {getHistoryLS} from '../../utils/functions';

function History() {
    const history=getHistoryLS();
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Historial</h1>            
            <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Propiedad</th>
                    <th>Ubicación</th>
                    <th>Metros cuadrados</th>
                    <th>Póliza</th>
                </tr>
            </thead>
            <tbody>
                {history.map((e,i)=>(
                    <tr key={i}>
                        <td>{e.date}</td>
                        <td>{e.property}</td>
                        <td>{e.location}</td>
                        <td>{e.mts2}</td>
                        <td>{e.import}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default History