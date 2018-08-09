import React from 'react';
import { Table, Glyphicon, Button, Label } from 'react-bootstrap';
const requestVacationLider = () => {
    return (
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
                        <Button bsStyle='success' bsSize="xsmall" disabled="false">
                            <Glyphicon glyph="glyphicon glyphicon-ok" />
                        </Button>{" "}
                        <Button bsStyle="danger" bsSize="xsmall" disabled="false" >
                            <Glyphicon glyph="glyphicon glyphicon-remove" />
                        </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}
export default requestVacationLider;