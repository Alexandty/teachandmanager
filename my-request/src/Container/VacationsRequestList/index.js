import React from 'react';
import { connect } from 'react-redux';
import { Table, Label, Alert } from 'react-bootstrap';
import Moment from 'moment';
import { loadRequestVacation } from './action';

export const RequestVacationList = ({ loadRequestVacation, VacationData, user }) => {
  loadRequestVacation(user.user)
  if (VacationData.length === 0) {
    return (
      <div className='ListRequestVacationEmpty'>
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
      <div className="Vacation">
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
              .sort((vacationA, vacationB) => {
                if (vacationA === vacationB) return 1
                else if (vacationA < vacationB) return -0
                else return 0
              })
              .map(Vacation =>
                <tr key={Vacation.idRequest}>
                  <td>{Moment(Vacation.startDate).format('DD/MM/YYYY')}</td>
                  <td>{Moment(Vacation.endDate).format('DD/MM/YYYY')}</td>
                  <td>{Vacation.requestedDays}</td>
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
    ...state.login,
    ...state.VacationList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRequestVacation(user) {
      dispatch(loadRequestVacation(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestVacationList);