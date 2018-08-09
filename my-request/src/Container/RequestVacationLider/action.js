import axios from 'axios';

const action = {
    obtenerListaSolicitudesSolvers: () => {
        return (dispatch) => {
            return axios.get()
                .then(response => {
                    dispatch({ type: 'LOAD_REQUEST_VACATION_SOLVERS', list: response.data })
                });
        }
    }
}

export default action;