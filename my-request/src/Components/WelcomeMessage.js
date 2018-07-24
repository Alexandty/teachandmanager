import React from 'react';
import { connect } from 'react-redux';

const WelcomeMessage = (props) => {
    if (!props.name) {
        return <div>...</div>
    }
    return (
        <div>
        <h1 className="saludo">Bienvenido</h1>
        <h2>{props.name} {props.lastName}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.reducerLogin.user
    };
};

export default connect(mapStateToProps)(WelcomeMessage);