import React from 'react';
import { connect } from 'react-redux';
import { Table  } from 'react-bootstrap';


const styles = {
    StyleTable: {
        display: 'flex',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
 
};



const SolicitudVacionesView = ({ solicitudVaciones }) => {

    return (
        <div style={styles.StyleTable}>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>Id Solicitud</th>
                        <th>Fecha inicio</th>
                        <th>Fecha Fin</th>
                        <th>Días Solicitados</th>
                    </tr>
                </thead>
                <tbody>
                    {solicitudVaciones.map(Data =>
                        <tr>
                            <td key={Data.idVacationRequest}>{Data.idVacationRequest}</td>
                            <td>{Data.startData}</td>
                            <td>{Data.endData}</td>
                            <td>{Data.requestedDays}</td>
                        </tr>
                    )}
                </tbody>
            </Table>;
    </div>
    );
};

const mapStateToProps = state => {
    return {
        DATA: state.solicitudVaciones,

    };
};


export default connect(mapStateToProps)(SolicitudVacionesView);
