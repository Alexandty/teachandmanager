import axios from 'axios';
const addSV = (sVacaciones) => ({
    type: 'ADD_SOLICITUD_VACACIONES',
    sVacaciones
});
const checkSV = (sVacaciones) => ({
    type: 'CHECK_SOLICITUD_VACACIONES',
    sVacaciones
});

const loadAD = (avalableDaysData) => ({
    type: 'GET_AVAILABLE_DAYS',
    avalableDaysData
});


const action = {
    consultar: (values) => {
        if (values.startDate !== undefined && values.endDate !== undefined ) {
            return (dispatch) => {
                const solicitudVacaciones = {
                    startDate: values.startDate,
                    endDate: values.endDate,
                    user: values.user
                };
                return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
                    .then(result => {
                        dispatch(checkSV(result.data));
                        alert(result.data + ' Dias disponibles para fecha seleccionada');
                    }, error => {
                        alert(error.response.data.message);
                    });
            };
        };

    },
    guardar: (values) => {
        return (dispatch) => {
            const solicitudVacaciones = {
                startDate: values.startDate,
                endDate: values.endDate,
                user: values.user,
                motivo: "",
                estado: "pendiente"
            };
            return axios.post('http://localhost:8081/solicitud/vacaciones/create/', solicitudVacaciones)
                .then(result => {
                    dispatch(addSV(result.data));
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
