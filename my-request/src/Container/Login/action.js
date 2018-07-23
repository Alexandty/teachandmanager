import axios from 'axios';

const actions = {
    login: values => {
        console.log('actionLogin: ' + values.username, values.password)
        return dispatch => {

            return axios.post('http://localhost:8081/login/get/person', {
                username: values.username,
                password: values.password
            })
                .then(response => {
                    console.log(response.data);
                    console.log(response.status);
                    alert('WELCOME SOLVER ' + response.data.name)
                    dispatch({
                        type: "LOGIN",
                        user: response.data,
                    });
                },
                    error => {
                        alert(error.response.data.message);
                        console.log(error.response);
                    })
        }
    }
}

export default actions;

