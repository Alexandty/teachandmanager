import axios from 'axios';


const _loadVacation = (VacationData) => ({
  type: 'REPLACE_VACATION_REQUEST',
  VacationData
});


const loadVacation = () => {
  return dispatch => {
    return axios.get("http://localhost:8081/request/request/"  )
      .then(response => {
        console.log(response.data);
        dispatch( _loadVacation(response.data) );
      });
  };
};




export { loadVacation};
