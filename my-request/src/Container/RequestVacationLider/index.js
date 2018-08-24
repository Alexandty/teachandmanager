import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Table, Glyphicon, Button, Label } from 'react-bootstrap';
import Moment from 'moment';
import SinSolicitudes from '../../Components/NoSolicitudes';
import Confirmar from '../../Components/Confirmar';
import PedirMotivo from '../PedirMotivo';

var mostrarConfirmacion = false;
var mostrarPedirMotivo = false;

var estadoACambiar = 'pendiente';
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

const continuar = (cambiarEstado) => {
    mostrarConfirmacion = false;
    if (estadoACambiar === 'aprobado') {
        cambiarEstado(solicitidACambiar);
    }
    if (estadoACambiar === 'rechazado') {
        mostrarPedirMotivo = true;
    }
}

const recibirMotivo = (motivo) => {
    mostrarPedirMotivo = false;
    solicitidACambiar.motivo = motivo;
    return solicitidACambiar;
}

export const RequestVacationLider = ({
    obtenerListaSolicitudesSolvers, cambiarEstado, listVacationRequestSolvers, user
}) => {
    obtenerListaSolicitudesSolvers(user);
    return (
        listVacationRequestSolvers.length === 0 ?
            <SinSolicitudes title={'!Lo sentimos!'}>
                Usted no cuenta con informacion de solicitudes.
            </SinSolicitudes>
            :
            <div className='Solicitudes'>
                <h2>Mis Solicitudes</h2>
                <Confirmar
                    mostrar={mostrarConfirmacion}
                    onCancelar={closeConfirmarCambio}
                    onAceptar={() => continuar(cambiarEstado)}
                    msg={'Usted va a colocar en ' + estadoACambiar + ' la solicitud'}
                />
                <PedirMotivo
                    mostrar={mostrarPedirMotivo}
                    titulo={'Ingrese el motivo del rechazo'}
                    respuesta={''}
                    enviarMotivo={(motivo) => cambiarEstado(recibirMotivo(motivo))}
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
                            // .sort((solicitudA, solicitudB) => {
                            //     if (solicitudA === solicitudB) return 1
                            //     else if (solicitudA < solicitudB) return -1
                            //     else return 1
                            // })
                            .map(solicitud =>
                                <tr key={solicitud.idRequest}>
                                    <td>{solicitud.personId.name}{" "}{solicitud.personId.lastName}</td>
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
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.listVacationSolvers,
        ...state.login.user
    };
};

export default connect(mapStateToProps, action)(RequestVacationLider);