const initialState = {
    user: [],
    logged: false,
    msj: ''
};

const login = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.user,
            logged: true
        }
    }
    if (action.type === "ERROR_FIELD") {
        return {
            ...state,
            msj: action.msj
        }
    }
    return state;
};

export default login;