import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Table, Glyphicon, Button, Label, Alert } from 'react-bootstrap';

export const RequestVacationLider = ({ listVacationRequestSolvers }) => {
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
                        <tr>
                            <td>Alexander Marquez</td>
                            <td>5/08/2018</td>
                            <td>7/08/2018</td>
                            <td>8/08/2018</td>
                            <td>2</td>
                            <td><Label bsStyle='default'>Pendiente</Label></td>
                            <td>
                                <Button bsStyle='success' bsSize="xsmall">
                                    <Glyphicon glyph="glyphicon glyphicon-ok" />
                                </Button>{" "}
                                <Button bsStyle="danger" bsSize="xsmall" >
                                    <Glyphicon glyph="glyphicon glyphicon-remove" />
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alexander Marquez</td>
                            <td>5/08/2018</td>
                            <td>7/08/2018</td>
                            <td>8/08/2018</td>
                            <td>2</td>
                            <td><Label bsStyle='success'>Aprobado</Label></td>
                            <td>
                                <Button bsStyle='success' bsSize="xsmall" disabled={false}>
                                    <Glyphicon glyph="glyphicon glyphicon-ok" />
                                </Button>{" "}
                                <Button bsStyle="danger" bsSize="xsmall" disabled={false} >
                                    <Glyphicon glyph="glyphicon glyphicon-remove" />
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.listVacationSolvers
    };
};

export default connect(mapStateToProps, action)(RequestVacationLider);