const initialState = {
    vacationSolicitudData: [],
    mensaje: '',
    avalableDaysData: 0,
    availableDaysVacation: true,
    field1: false,
    field2: false
};

const AddSolitudVacaciones = (state = initialState, action) => {
    if (action.type === "ADD_SOLICITUD_VACACIONES") {
        return {
            ...state,
            vacationSolicitudData: action.vacationSolicitudData,
            mensaje: ''
        };
    }
    else if (action.type === "CHECK_SOLICITUD_VACACIONES") {
        return {
            ...state,
            mensaje: action.days + ' Dias disponibles para fecha seleccionada',
            availableDaysVacation: false
        };
    }
    else if (action.type === "ERROR_SOLICITUD_VACACIONES") {
        return {
            ...state,
            mensaje: action.mensajeError,
            availableDaysVacation: true
        };
    }
    else if (action.type === "GET_AVAILABLE_DAYS") {
        return {
            ...state,
            avalableDaysData: action.avalableDaysData
        };
    }
    return state;
}
export default AddSolitudVacaciones;