import axios from 'axios';

const action = {
    obtenerListaSolicitudesSolvers: (username) => {
        return (dispatch) => {
            return axios.get('http://localhost:8081/solicitudlider/vacaciones/consultar/' + username)
                .then(response => {
                    dispatch({ type: 'LOAD_REQUEST_VACATION_SOLVERS', list: response.data })
                });
        }
    },
    cambiarEstado: (solicitud) => {
        return (dispatch) => {
            return axios
                .put('http://localhost:8081/solicitudlider/vacaciones/actualizar' + solicitud.idRequest, solicitud)
                .catch(error => {
                    alert(error);
                });
        }
    }
}

export default action;