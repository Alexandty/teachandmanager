import axios from 'axios';

const _addSolicitudVacaciones = (sVacaciones) => ({
    type: 'ADD_SOLICITUD_VACACIONES',
    sVacaciones
});

const action = {
    guardar: (values) => {
        return (dispatch) => {
            const solicitudVacaciones = {
                startDate: values.startDate,
                endDate: values.endDate,
                user: values.user
            };
            console.log(solicitudVacaciones)
            return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
                .then(result => {
                    dispatch(_addSolicitudVacaciones(result.data));
                    console.log(result.data)
                },
                    error => {
                        alert(error.response.data.message);
                    });
        };
    }
};

export default action;
