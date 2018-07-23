import axios from 'axios';

// const dispatchLogin = (user) => ({
//     type: 'LOGIN_DONE',
//     user
// })

const actions = {
    login: values => {
        console.log('actionLogin: ' + values.username, values.password)
        return dispatch => {
            /*return axios.get('http://localhost:8081/login/getUser'+values.username, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    user:  {
                        username: values.username,
                        password: values.password
                    }
                }
            })*/
            return axios.post('http://localhost:8081/login/get/person', {
                username: values.username,
                password: values.password
            })
                // .then(function (response) {
                //     console.log(response.data);
                //     console.log(response.status);
                // }, function (error) {
                //     alert(error.response.data.message);
                //     console.log(error.response);
                // })
                .then(response => {
                    console.log(response.data);
                    console.log(response.status);
                    dispatch({
                        type: "LOGIN",
                        user: response.data
                        // dispatchLogin(response.data)
                    })
                },
                    error => {
                        alert(error.response.data.message);
                        console.log(error.response);
                    })
        }
    }
}

export default actions;

