import axios from 'axios';


const _addSolicitudVacaciones = (sVacaciones) => ({
    type: 'ADD_SOLICITUD_VACACIONES',
    sVacaciones
});

const action = {

    guardar: values =>{
        
        return (dispatch) => {
            const solicitudVacaciones = {
                startDate: values.startDate ,
                endDate: values.endDate
            };
            console.log(solicitudVacaciones);
            return axios.post('', solicitudVacaciones).then(result => {
                dispatch(_addSolicitudVacaciones(result.data));
            });
        };

    }
   
};
export default action;
