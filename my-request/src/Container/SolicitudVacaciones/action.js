import axios from 'axios';
import {Alert} from 'react-bootstrap';

const _addSolicitudVacaciones = (sVacaciones) => ({
    type: 'ADD_SOLICITUD_VACACIONES',
    sVacaciones
});

const action = {
    guardar: values => {
        return (dispatch) => {
            const solicitudVacaciones = {
                startDate: values.startDate,
                endDate: values.endDate
            };
            console.log(solicitudVacaciones);
            return axios.post('http://localhost:8081/solicitud/vacaciones/disponibles', solicitudVacaciones)            
                .then(result => {
                    dispatch(_addSolicitudVacaciones(result.data));
                    alert("Usted no tiene Dias disponibles")
                });
        };

    }

};
export default action;
