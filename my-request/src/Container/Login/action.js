import axios from 'axios';

const actions = {
    login: values => {
        return dispatch => {
            return axios.post('http://localhost:8081/login/get/person', {
                username: values.username,
                password: values.password
            })
                .then(response => {
                    dispatch({ type: "LOGIN", user: response.data });
                }, error => {
                    alert(error.response.data.message);
                });
        };
    }
};

export default actions;

