const initialState = {
    user: [],
    logged: false
};

const login = (state = initialState, action) => {
    if (action.type === "LOGIN") {
        return {
            ...state,
            user: action.user,
            logged: true
        }
    }
    return state;
};

export default login;