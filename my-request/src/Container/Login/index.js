import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import actions from './action';
import WelcomeMessage from '../../Components/WelcomeMessage'

export const LoginForm = props => {
    const { login, handleSubmit, user } = props;
    return (
        <Row className="show-grid">
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <Jumbotron>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(login)}>
                        <div>
                            <label htmlFor='username'>Username: </label>
                            <Field name='username' component='input'></Field>
                        </div>
                        <div>
                            <label htmlFor='password'>Password: </label>
                            <Field name='password' component='input'></Field>
                        </div>
                        <button type="submit">Login</button>
                        {/* <h1><ul>
                        {user.map(user => (
                            <li key={user.id}>
                                {user.name}
                            </li>
                        ))}
                    </ul></h1> */}
                        <WelcomeMessage />
                    </form>
                </Jumbotron>
            </Col>
            <Col xsHidden md={4}>
            </Col>
        </Row>
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