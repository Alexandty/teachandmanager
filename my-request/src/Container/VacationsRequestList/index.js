import React from 'react';
import { connect } from 'react-redux';
import { Table, Label } from 'react-bootstrap';
import Moment from 'moment';
import { loadRequestVacation } from './action';
import SinSolicitudes from './../../Components/NoSolicitudes';

export const RequestVacationList = ({ loadRequestVacation, VacationData, user }) => {
  loadRequestVacation(user.user)
  return (
    VacationData.length === 0 ?
      <SinSolicitudes title={'!Lo sentimos¡'}>
        Usted no cuenta con informacion de solicitudes.
      </SinSolicitudes>
      :
      <div className="Vacation">
        <h2>Consulta</h2>
        {user.name} {user.lastName}  <Label bsStyle="success">Fecha de ingreso a la empresa {Moment(user.entryDate).format('DD/MM/YYYY')}</Label>
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
                else if (vacationA < vacationB) return -1
                else return 1
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
  )
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