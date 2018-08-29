import React from 'react';
import { connect } from 'react-redux';
import { Table, Glyphicon, Button, Label } from 'react-bootstrap';
import Moment from 'moment';
import { loadRequestVacation, cambiarEstado } from './action';
import SinSolicitudes from './../../Components/NoSolicitudes';
import Confirmar from '../../Components/Confirmar';
import PedirMotivo from '../PedirMotivo';

let mostrarConfirmacion = false;
let mostrarPedirMotivo = false;
let estadoACambiar = '';
let solicitudACambiar = {};

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
    case 'cancelado':
      estilo = 'danger'
      break;
  }
  return estilo;
};
const ConfirmarCambio = (Vacation, nuevoEstado) => {
  solicitudACambiar = Vacation;
  estadoACambiar = nuevoEstado;
  solicitudACambiar.estado = nuevoEstado;
  mostrarConfirmacion = true;
};

const continuar = (cambiarEstado) => {
  mostrarConfirmacion = false;
  if (estadoACambiar === 'cancelado') {
    mostrarPedirMotivo = true;
  }
};

const closeConfirmarCambio = () => {
  mostrarConfirmacion = false;
};

const recibirMotivo = (motivo) => {
  mostrarPedirMotivo = false;
  solicitudACambiar.motivo = motivo;
  return solicitudACambiar;
};

export const RequestVacationList = ({ loadRequestVacation, VacationData, user, cambiarEstado }) => {
  loadRequestVacation(user.user);
  return (
    VacationData.length === 0 ?
      <SinSolicitudes title={'!Lo sentimos¡'}>
        Usted no cuenta con informacion de solicitudes.
      </SinSolicitudes>
      :
      <div className="Vacation">
        <h2>Consulta</h2>
        <Confirmar
          mostrar={mostrarConfirmacion}
          onCancelar={closeConfirmarCambio}
          onAceptar={() => continuar(cambiarEstado)}
          msg={'Usted va a colocar en ' + estadoACambiar + ' la solicitud'}
        />
        <PedirMotivo
          mostrar={mostrarPedirMotivo}
          titulo={'Ingrese el motivo de cancelación'}
          enviarMotivo={(motivo) => cambiarEstado(recibirMotivo(motivo))}
        />
        <div className="user-info">{user.name} {user.lastName} {" "}
          <Label bsStyle="success">Fecha de ingreso a la empresa {Moment(user.entryDate).format('DD/MM/YYYY')}</Label>
        </div>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Fecha de nicio</th>
              <th>Fecha de Fin</th>
              <th>Dias solicitados</th>
              <th>Estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {VacationData
              .map(Vacation =>
                <tr key={Vacation.idRequest}>
                  <td>{Moment(Vacation.startDate).format('DD/MM/YYYY')}</td>
                  <td>{Moment(Vacation.endDate).format('DD/MM/YYYY')}</td>
                  <td>{Vacation.requestedDays}</td>
                  <td>
                    <Label bsStyle={definirestiloSegunEstado(Vacation.estado)}>{Vacation.estado}</Label>
                  </td>
                  <td>
                    <Button
                      bsStyle='link' bsSize="xsmall"
                      disabled={Vacation.estado !== 'cancelado' ? false : true}
                      onClick={() => ConfirmarCambio(Vacation, 'cancelado')}
                    >
                      <Glyphicon
                        glyph="glyphicon glyphicon-trash"
                        disabled={Vacation.estado === 'cancelado' ? false : true}
                      />
                    </Button>
                  </td>
                </tr>
              )}
          </tbody>
        </Table>
      </div>
  );
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
      dispatch(loadRequestVacation(user));
    },
    cambiarEstado(solicutdActualizada) {
      dispatch(cambiarEstado(solicutdActualizada));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestVacationList);