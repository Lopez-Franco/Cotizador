import React from "react";
import { Link } from "react-router-dom"
import { formatCurrency, getHistoryLS } from '../utils/functions';
import NavLinks from './NavLinks';
import Table from 'react-bootstrap/Table';
import './styles/history.css'
function History() {
    const history = getHistoryLS();
    return (
        <>
            <NavLinks><Link to="/" className="link">Home</Link></NavLinks>

            <div className="container-history">

                <h1>Historial</h1>
                <Table striped bordered hover responsive className="table-history">
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
                        {history.map((e, i) => (
                            <tr key={i}>
                                <td>{e.date}</td>
                                <td>{e.property}</td>
                                <td>{e.location}</td>
                                <td>{e.mts2}</td>
                                <td>{formatCurrency(parseFloat(e.import))}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default History