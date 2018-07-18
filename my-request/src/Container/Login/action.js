// import React from 'react';
import axios from 'axios';

const actions = {
    login: values => {
        console.log('actionLogin' + values)

        return dispatch => {
            return axios.get('http://localhost:8084/login', {
                headers: {
                    username: values.username,
                    password: values.password
                }
            })
                .then(response => {
                    dispatch({
                        type: "LOGIN",
                        user: response.data = 'user'
                    })
                })
        }

    }
}


export default actions;

