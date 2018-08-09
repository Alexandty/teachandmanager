const initialState = {
    listVacationRequestSolvers: []
};

const requestVacationLider = (state = initialState, action) => {
    if (action.type === 'LOAD_REQUEST_VACATION_SOLVERS') {
        return {
            ...state,
            listVacationRequestSolvers: action.list
        };
    }
    return state;
};

export default requestVacationLider;