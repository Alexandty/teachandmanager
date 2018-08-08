import React from 'react';
import{Table} from 'react-bootstrap';
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
                    <td>Dato1</td>
                    <td>Dato2</td>
                    <td>Dato3</td>
                    <td>Dato4</td>
                    <td>Dato5</td>
                    <td>Dato6</td>
                    <td>Dato7</td>
                </tr>
            </tbody>
        </Table>
    );
}
export default requestVacationLider;