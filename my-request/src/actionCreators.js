import axios from 'axios';

const loadVacationRequest = () => {
  return dispatch => {
    return axios.get("http://localhost:8081/request/request/")
      .then(response => {
        console.log(response.data);
        dispatch({ type: "REPLACE_VACATION_REQUEST", VacationRequest: response.data });
      });
  };
};


export { loadVacationRequest };
