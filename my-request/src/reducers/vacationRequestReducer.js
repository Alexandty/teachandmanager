const vacationRequestReducerDefaultState = [];

export default (state = vacationRequestReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_VACATION_REQUEST':
            return [
                ...state,
                action.book
            ];
        case 'REMOVE_VACATION_REQUEST':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_VACATION_REQUEST':
            return state.map((book) => {
                if (book.id === action.id) {
                    return {
                        ...vacationRequest,
                        ...action.updates
                    };
                } else {
                    return vacationRequest;
                }
            });
        case 'GET_VACATION_REQUEST':
            return action.vacationRequest;
        default:
            return state;
    }
};