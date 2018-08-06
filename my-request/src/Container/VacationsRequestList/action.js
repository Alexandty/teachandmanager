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

export { loadRequestVacation };
