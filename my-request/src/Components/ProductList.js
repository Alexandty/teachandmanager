import React from 'react';
import { connect } from 'react-redux';
import { Table, Label, Alert } from 'react-bootstrap';

import Moment from 'moment';



const RequestVacationList = ({ VacationData, user }) => {

  const dato = VacationData.map(product =>
    product.idRequest)

  if (!dato) {
    return (
      <div>
        {user.name} {user.lastName} <Label bsStyle="success">fecha de ingreso a la empresa {Moment(user.entryDate).format('DD/MM/YYYY')}</Label>
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
      <div>
        {user.name} {user.lastName} <Label bsStyle="success">fecha de ingreso a la empresa {Moment(user.entryDate).format('DD/MM/YYYY')}</Label>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Fecha de nicio</th>
              <th>Fecha de Fin</th>
              <th>Dias solicitados</th>
            </tr>
          </thead>
          <tbody>
            {VacationData
              .sort((productA, productB) => {
                if (productA === productB) return 1
                else if (productA < productB) return -0
                else return 0
              })
              .map(product =>
                <tr key={product.idRequest}>
                  <td>{Moment(product.startDate).format('DD/MM/YYYY')}</td>
                  <td>{Moment(product.endDate).format('DD/MM/YYYY')}</td>
                  <td>{product.requestedDays}</td>
                </tr>
              )}
          </tbody>
        </Table>
      </div>
    );

  }

};

const mapStateToProps = state => {
  return {
    ...state.reducer
  };
};

export default connect(mapStateToProps)(RequestVacationList);
