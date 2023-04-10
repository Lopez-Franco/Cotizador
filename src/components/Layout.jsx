import React, { useState } from "react";
import FormInsurance from "./FormInsurance";
import { Link } from 'react-router-dom';
import { Insurance } from '../class/Insurance';
import { setHistoryLS, formatCurrency } from "../utils/functions";
import { Container, Row, Col } from 'react-bootstrap';
import './styles/layout.css'
import { ReactComponent as IconSave } from './resource/save.svg';
import NavLinks from "./NavLinks";
function Layout() {
    const [insurance, setInsurance] = useState(null);
    const saveStateInsurance = (history) => {
        const { costMts2, property, location, mts2 } = history;
        const insurance = new Insurance(costMts2, property, location, mts2);
        setInsurance(insurance)
    }
    return (
            <div>
            <NavLinks><Link to="/history" className="link">Historial</Link></NavLinks>
                <Container fluid>
                    <Row className="justify-content-md-center row1">
                        <Col xs={8}>
                            <h3>Cotizar Seguro</h3>
                            <FormInsurance saveStateInsurance={saveStateInsurance} />
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center row2">
                        <Col xs={8} className="d-flex justify-content-between align-items-center">
                            <div>
                                <h5>Precio estimado</h5>
                                {(insurance !== null) ? (
                                    <h3>{formatCurrency(parseFloat(insurance.costInsurance()))}</h3>
                                ) : (
                                    <h4>$ 0.00</h4>
                                )
                                }
                            </div>
                            {(insurance !== null) && (
                                <span title="Guardar en historial" onClick={(e) => {setHistoryLS(insurance)}}>
                                    <IconSave />
                                </span>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}
export default Layout;