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
                user: values.user,
            };
            console.log(solicitudVacaciones)
            return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)
                .then(result => {
                    dispatch(_addSolicitudVacaciones(result.data));
                    const retorno = result.data;
                    if (retorno >= 1) {
                        alert("Usted tiene " + retorno + "dias disponibles de vacaciones")
                    } else {
                        if (retorno <= 0) {
                            alert("usted no tiene dias disponibles de vacaciones")
                        }
                    }
                }, error => {
                    alert(error.response.data.message);
                });

        };
    }
};

export default action;
