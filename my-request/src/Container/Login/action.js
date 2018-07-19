// import React from 'react';
import axios from 'axios';

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
            return axios.post('http://localhost:8081/login/getUser', {username: values.username,password: values.password}
            )
                .then(response => {
                    // dispatch({
                    //     type: "LOGIN",
                    //     user: response.data = 'user'
                    // })
                    console.log(response.data);
                    console.log(response.status)
                })
        }

    }
}


export default actions;

