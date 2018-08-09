import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import actions from './action';
import Button from '../../Components/Button';
import '../../App.css';

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                <br />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

export const LoginForm = props => {
    const { login, handleSubmit, pristine } = props;
    return (
        <Row className="show-grid">
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <Jumbotron>
                    <h2 className="login">Login</h2>
                    <form onSubmit={handleSubmit(login)}>
                        <div>
                            <Field name='username' component={renderField} label='Username' type='text'></Field>
                        </div>
                        <div>
                            <Field name='password' component={renderField} label='Password' type='password'></Field>
                        </div>
                        <br />
                        <Button type="submit" disabled={pristine} >LOGIN</Button>
                    </form>
                </Jumbotron>
            </Col>
            <Col xsHidden md={4}>
            </Col>
        </Row>
    )
};

const Login = reduxForm({
    form: 'LoginForm',
    validate
})(LoginForm)

const mapStateToProps = state => {
    return {
        ...state.login
    };
};

export default connect(
    mapStateToProps,
    actions
)(Login);