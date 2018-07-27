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
            return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
                .then(result => {
                    dispatch(_addSolicitudVacaciones(result.data));
                });
        };
    }
};

// const action = (user) => {
//     return (dispatch) => {
//         const solicitudVacaciones = {
//             // startDate: values.startDate,
//             // endDate: values.endDate,
//             user: user.username
//         };
//         console.log('in action', user);
//         return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
//             .then(result => {
//                 dispatch(_addSolicitudVacaciones(result.data));
//             });
//     };
// };
export default action;
