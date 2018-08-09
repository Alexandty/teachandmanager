import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Table, Glyphicon, Button, Label, Alert } from 'react-bootstrap';
import Moment from 'moment';

export const RequestVacationLider = ({ obtenerListaSolicitudesSolvers, listVacationRequestSolvers, user }) => {
    obtenerListaSolicitudesSolvers(user);
    if (listVacationRequestSolvers.length === 0) {
        return (
            <div className='noSolicitudes'>
                <Alert bsStyle="info">
                    <h4>!Lo sentimos!</h4>
                    <p>
                        Usted no cuenta con informacion de solicitudes.
                    </p>
                </Alert>
            </div>
        )
    } else {
        return (
            <div className='Solicitudes'>
                <h2>Mis Solicitudes</h2>
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
                                    <td>{solicitud.name}</td>
                                    <td>{Moment(solicitud.startDate).format('DD/MM/YYYY')}</td>
                                    <td>{Moment(solicitud.endDate).format('DD/MM/YYYY')}</td>
                                    <td>{Moment(solicitud.returnDate)}</td>
                                    <td>{solicitud.requestedDays}</td>
                                    <td>
                                        <Label bsStyle={solicitud.estado === 'aprobado' ? 'success' : 'default'}>{solicitud.estado}</Label>
                                    </td>
                                    <td>
                                        <Button bsStyle='success' bsSize="xsmall">
                                            <Glyphicon className='glyphicon-ok' glyph="glyphicon glyphicon-ok" disabled={false} />
                                        </Button>{" "}
                                        <Button bsStyle="danger" bsSize="xsmall" >
                                            <Glyphicon className='glyphicon-remove' glyph="glyphicon glyphicon-remove" disabled={false} />
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