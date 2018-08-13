import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Table, Glyphicon, Button, Label } from 'react-bootstrap';
import Moment from 'moment';

import SinSolicitudes from '../../Components/SinSolicitudes';
import Confirmar from '../../Components/Confirmar';
import PedirMotivo from '../PedirMotivo';

var mostrarConfirmacion = false;
var mostrarPedirMotivo = false;

var estadoACambiar = 'pendiente';
var motivo = '';
var solicitidACambiar = {};

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
        default:
            break;
    }
    return estilo;
}

const ConfirmarCambio = (solicitud, nuevoEstado) => {
    solicitidACambiar = solicitud;
    estadoACambiar = nuevoEstado;
    solicitidACambiar.estado = nuevoEstado;
    mostrarConfirmacion = true;
}

const closeConfirmarCambio = () => {
    mostrarConfirmacion = false;
}

const continuar = () => {
    mostrarConfirmacion = false;
    if (estadoACambiar === 'aprobado') {
        action.cambiarEstado(solicitidACambiar);
        finalizar();
    }
    if (estadoACambiar === 'rechazado') {
        obtenerMotivo();
    }
}

const obtenerMotivo = () => {
    mostrarPedirMotivo = true;
}

const recibirMotivo = () => {
    mostrarPedirMotivo = false;
    solicitidACambiar.motivo = motivo;
    action.cambiarEstado(solicitidACambiar);
    finalizar();
}

const finalizar = () => {
    estadoACambiar = 'pendiente';
    motivo = '';
    solicitidACambiar = {};
}

export const RequestVacationLider = ({
    motivoIngresado, obtenerListaSolicitudesSolvers, listVacationRequestSolvers, user
}) => {
    obtenerListaSolicitudesSolvers(user);
    motivo = motivoIngresado;
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
                <Confirmar
                    mostrar={mostrarConfirmacion}
                    onCancelar={closeConfirmarCambio}
                    onAceptar={continuar}
                    msg={'Usted va a colocar en ' + estadoACambiar + ' la solicitud'}
                />
                <PedirMotivo
                    mostrar={mostrarPedirMotivo}
                    titulo={'Ingrese el motivo del rechazo'}
                    respuesta={''}
                    enviarMotivo={recibirMotivo}
                />
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
                                            onClick={() => ConfirmarCambio(solicitud, 'aprobado')}
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
                                            onClick={() => ConfirmarCambio(solicitud, 'rechazado')}
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
        ...state.login.user,
        ...state.form.motivo
    };
};

export default connect(mapStateToProps, action)(RequestVacationLider);