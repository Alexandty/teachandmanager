const initialState = {
    vacationSolicitudData: [],
    avalableDaysData: 0,
    availableDaysVacation: true,
    field1: false,
    field2: false
};

const AddSolitudVacaciones = (state = initialState, action) => {
    if (action.type === "ADD_SOLICITUD_VACACIONES") {
        return {
            ...state,
            vacationSolicitudData: action.vacationSolicitudData
        };
    } else if (action.type === "CHECK_SOLICITUD_VACACIONES") {
        return {
            ...state,
            vacationSolicitudData: action.vacationSolicitudData,
            availableDaysVacation: false
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