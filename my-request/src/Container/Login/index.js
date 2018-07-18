import React from 'react';
import { connect } from 'react-redux';

import { Field, reduxForm } from 'redux-form';

//import Form from '../../Components/FormLogin';
import actions from './action';
//import { Jumbotron } from 'react-bootstrap';

export const LoginForm = props => {
    const { login, handleSubmit } = props;
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(login)}>
                    <div>
                        <label htmlFor='userName'>Username: </label>
                        <Field name='userName' component='input'></Field>
                    </div>
                    <div>
                        <label htmlFor='password'>Password: </label>
                        <Field name='password' component='input'></Field>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div >
        </div>
    )
};

const Login = reduxForm({
    form: 'LoginForm'
})(LoginForm)

const mapStateToProps = state => {
    return {
        ...state.Login
    };
};

export default connect(
    mapStateToProps,
    actions
)(Login);