import axios from 'axios';
import { reset } from 'redux-form';
import Moment from 'moment';

const addSV = (sVacaciones) => ({
    type: 'ADD_SOLICITUD_VACACIONES',
    sVacaciones
});
const checkSV = (days) => ({
    type: 'CHECK_SOLICITUD_VACACIONES',
    days
});
const errorSV = (mensajeError) => ({
    type: 'ERROR_SOLICITUD_VACACIONES',
    mensajeError
});

const loadAD = (avalableDaysData) => ({
    type: 'GET_AVAILABLE_DAYS',
    avalableDaysData
});

const action = {
    consultar: (values) => {
        if (values.startDate !== undefined && values.endDate !== undefined) {
            return (dispatch) => {
                const solicitudVacaciones = {
                    startDate: values.startDate,
                    endDate: values.endDate,
                    user: values.user
                };
                return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
                    .then(result => {
                        dispatch(checkSV(result.data));
                    }, error => {
                        dispatch(errorSV(error.response.data.message));
                    })
            };
        };
    },
    guardar: (values) => {
        return (dispatch) => {
            const solicitudVacaciones = {
                // startDate: new Date(values.startDate),
                // endDate: new Date(values.endDate),
                startDate: Moment(values.startDate).format(),
                endDate: Moment(values.endDate).format(),
                user: values.user,
                motivo: "",
                estado: "pendiente"
            };
            return axios.post('http://localhost:8081/solicitud/vacaciones/create/', solicitudVacaciones)
                .then(result => {
                    dispatch(addSV(result.data));
                    alert('Solicitud creada');
                    dispatch(reset('SolicitudForm'));
                }, error => {
                    alert(error.response.data.message);
                });
        };
    },
    loadAvailableDays: (user) => {
        return dispatch => {
            return axios.get("http://localhost:8081/solicitud/vacaciones/disponibles/" + user)
                .then(response => {
                    dispatch(loadAD(response.data));
                });
        };
    }
};

export default action;
