import axios from 'axios';

const action = {
    obtenerListaSolicitudesSolvers: (username) => {
        return (dispatch) => {
            return axios.get('http://localhost:8081/solicitudlider/vacaciones/consultar/' + username)
                .then(response => {
                    dispatch({ type: 'LOAD_REQUEST_VACATION_SOLVERS', list: response.data })
                });
        }
    }
}

export default action;