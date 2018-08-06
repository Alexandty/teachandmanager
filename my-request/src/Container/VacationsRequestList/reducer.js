const initialState = {
    VacationData: []
};
const RequestVacationList = (state = initialState, action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        return {
            ...state,
            VacationData: action.VacationData
        };
    } 
    return state;
}
export default RequestVacationList;
