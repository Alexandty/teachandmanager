import axios from 'axios';

const action = {
    obtenerListaSolicitudesSolvers: (username) => {
        return (dispatch) => {
            return axios.get('http://localhost:8081/solicitudlider/vacaciones/consultar/' + username)
                .then(response => {
                    dispatch({ type: 'LOAD_REQUEST_VACATION_SOLVERS', list: response.data });
                }).catch(error => {
                    dispatch({ type: 'ERROR', error });
                });
        }
    },
    cambiarEstado: (solicitud) => {
        return (dispatch) => {
            return axios
                .put('http://localhost:8081/solicitudlider/vacaciones/actualizar/' + solicitud.idRequest, solicitud)
                .then(response => {
                    dispatch({ type: 'UPTDATE_REQUEST_VACATION_SOLVERS'});
                }).catch(error => {
                    dispatch({ type: 'ERROR', error });
                });
        };
    }
};

export default action;