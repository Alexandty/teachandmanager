import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Table, Glyphicon, Button, Label } from 'react-bootstrap';
import Moment from 'moment';

import SinSolicitudes from '../../Components/SinSolicitudes';
import Confirmar from '../../Components/Confirmar';

var mostrarConfirmacion = false;

const definirestiloSegunEstado = (estado) => {
    var estilo = 'warning';
    switch (estado) {
        case 'aprobado':
            estilo = 'success';
            break;
        case 'rechazado':
            estilo = 'danger';
            break;
        case 'pendiente':
            estilo = 'default'
            break;
    }
    return estilo;
}

const ConfirmarCambio = (event) => {
    if (event) {
        return mostrarConfirmacion = true;
    }
}

const closeConfirmarCambio = (event) => {
    if (event) {
        return mostrarConfirmacion = false;
    }
}

const continuar = (event) => {
    
}

export const RequestVacationLider = ({ obtenerListaSolicitudesSolvers, listVacationRequestSolvers, user }) => {
    obtenerListaSolicitudesSolvers(user);
    if (listVacationRequestSolvers.length === 0) {
        return (
            <SinSolicitudes title={'!Lo sentimos!'}>
                Usted no cuenta con informacion de solicitudes.
            </SinSolicitudes>
        )
    } else {
        return (
            <div className='Solicitudes'>
                <h2>Mis Solicitudes</h2>
                <Confirmar mostrar={mostrarConfirmacion} onCancelar={closeConfirmarCambio} onAceptar={continuar} />
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Solver</th>
                            <th>Fecha de Inicio</th>
                            <th>Fecha de Fin</th>
                            <th>Fecha de Retorno</th>
                            <th>Dias Solicitados</th>
                            <th>Estado</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listVacationRequestSolvers
                            .sort((solicitudA, solicitudB) => {
                                if (solicitudA === solicitudB) return 1
                                else if (solicitudA < solicitudB) return -0
                                else return 0
                            })
                            .map(solicitud =>
                                <tr key={solicitud.idRequest}>
                                    <td>{solicitud.personId.name}</td>
                                    <td>{Moment(solicitud.startDate).format('DD/MM/YYYY')}</td>
                                    <td>{Moment(solicitud.endDate).format('DD/MM/YYYY')}</td>
                                    <td>{Moment(solicitud.returnDate).format('DD/MM/YYYY')}</td>
                                    <td>{solicitud.requestedDays}</td>
                                    <td>
                                        <Label bsStyle={definirestiloSegunEstado(solicitud.estado)}>{solicitud.estado}</Label>
                                    </td>
                                    <td>
                                        <Button
                                            bsStyle='success' bsSize="xsmall"
                                            disabled={solicitud.estado === 'pendiente' ? false : true}
                                            onClick={ConfirmarCambio}
                                        >
                                            <Glyphicon
                                                glyph="glyphicon glyphicon-ok"
                                                disabled={solicitud.estado === 'pendiente' ? false : true}
                                            />
                                        </Button>
                                        {" "}
                                        <Button
                                            bsStyle="danger" bsSize="xsmall"
                                            disabled={solicitud.estado === 'pendiente' ? false : true}
                                        >
                                            <Glyphicon
                                                glyph="glyphicon glyphicon-remove"
                                                disabled={solicitud.estado === 'pendiente' ? false : true}
                                            />
                                        </Button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.listVacationSolvers,
        ...state.login.user
    };
};

export default connect(mapStateToProps, action)(RequestVacationLider);