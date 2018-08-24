import axios from 'axios';

const _loadRequestVacation = (VacationData) => ({
  type: 'REPLACE_PRODUCTS',
  VacationData
});

const loadRequestVacation = (user) => {
  return dispatch => {
    return axios.get("http://localhost:8081/solicitud/vacaciones/consultar/" + user)
      .then(response => {
        dispatch(_loadRequestVacation(response.data));
      });
  };
};

const cambiarEstado = (solicitud) => {
  return (dispatch) => {
    return axios
      .put('http://localhost:8081/solicitud/vacaciones/' + solicitud.idRequest, solicitud)
      .then(response => {
        dispatch({ type: 'UPTDATE_REQUEST_VACATION_SOLVERS' });
      }).catch(error => {
        dispatch({ type: 'ERROR', error });
      });
  };
}

export { loadRequestVacation, cambiarEstado };