import axios from 'axios';
const _addSolicitudVacaciones = (sVacaciones) => ({
    type: 'ADD_SOLICITUD_VACACIONES',
    sVacaciones
});
const _checkSolicitudVacaciones = (sVacaciones) => ({
    type: 'CHECK_SOLICITUD_VACACIONES',
    sVacaciones
});

const action = {
    consultar: (values) => {
        return (dispatch) => {
            const solicitudVacaciones = {
                startDate: values.startDate,
                endDate: values.endDate,
                user: values.user                
            };
            console.log(solicitudVacaciones)
            return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
                .then(result => {
                    dispatch(_checkSolicitudVacaciones(result.data));
                    alert(result.data + ' Dias disponibles para fecha seleccionada')
                }, error => {
                    alert(error.response.data.message);
                });
        };
    },
    guardar: (values) => {
        return (dispatch) => {
            const solicitudVacaciones = {
                startDate: values.startDate,
                endDate: values.endDate,
                user: values.user,
            };
            console.log('guardar',solicitudVacaciones)
            return axios.post('http://localhost:8081/solicitud/vacaciones/create/', solicitudVacaciones)
                .then(result => {
                    dispatch(_addSolicitudVacaciones(result.data));
                }, error => {
                    alert(error.response.data.message);
                });
        };
    }
};

export default action;
