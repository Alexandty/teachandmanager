import axios from 'axios';

const _loadAvailabreDays = (avalableDaysData) => ({
  type: 'GET_AVAILABLE_DAYS',
  avalableDaysData
});

const loadAvailableDays = (user) => {
  return dispatch => {
    return axios.get("http://localhost:8081/solicitud/vacaciones/disponibles/" + user)
      .then(response => {
        dispatch(_loadAvailabreDays(response.data));
      });
  };
};

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

export { loadRequestVacation, loadAvailableDays };
