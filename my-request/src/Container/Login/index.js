import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import actions from './action';
import WelcomeMessage from '../../Components/WelcomeMessage'



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
        <br/>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

export const LoginForm = props => {
    const { login, handleSubmit, user, pristine } = props;
    return (
        <Row className="show-grid">
            <Col xs={6} md={4}>
            </Col>
            <Col xs={6} md={4}>
                <Jumbotron>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(login)}>
                        <div>
                            <Field name='username' component={renderField} label='Username'></Field>
                        </div>
                        <div>
                            <Field name='password' component={renderField} label='Password'></Field>
                        </div>
                        <button type="submit" disabled={pristine}>Login</button>
                        {/* <h1><ul>
                            {user.map(user => (
                                <li key={user.id}>
                                    {user.name}
                                </li>
                            ))}
                        </ul></h1> */}
                        {user.name}
                        <WelcomeMessage >
                        </WelcomeMessage >
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
        ...state.reducerLogin
    };
};

export default connect(
    mapStateToProps,
    actions
)(Login);