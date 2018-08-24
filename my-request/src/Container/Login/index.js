import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Jumbotron, Label } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import actions from './action';
import Button from '../../Components/Button';
import '../../App.css';

// const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(20)

const renderField = ({
    input, label, type, maxLength, invalidFields, meta: { touched, error, warning, dispatch }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input maxLength="20" className={touched && error ? "border-color" : ''} {...input} placeholder={label} type={type} />
                <br />
                {touched &&
                    ((error && dispatch(() => invalidFields(error))))}
                {!error && dispatch(() => invalidFields(''))}
            </div>
        </div>
    )

export const LoginForm = props => {
    const { login, handleSubmit, pristine, invalidFields, msj } = props;
    return (
        <Row className="show-grid">
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <Jumbotron className="Jumbotron">
                    <h2 className="login">Login</h2>
                    <form onSubmit={handleSubmit(login)}>
                        <div>
                            <Field maxLength="20" name='username' invalidFields={invalidFields} component={renderField} label='Username' type='text'></Field>
                        </div>
                        <div>
                            <Field maxLength="20" name='password' invalidFields={invalidFields} component={renderField} label='Password' type='password'></Field>
                        </div>
                        <br />
                        {msj === '' ? <div /> : <div><Label bsStyle="danger">{msj}</Label></div>}
                        <br />
                        <Button className="my-button" type="submit" disabled={pristine} >LOGIN</Button>
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