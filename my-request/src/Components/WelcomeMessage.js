import React from 'react';
import { connect } from 'react-redux';

const WelcomeMessage = (props) => {
    if (!props.name) {
        return <div>...</div>
    }
    return (
        <h1 className="saludo">Bienvenido {props.name}</h1>
    )
}

const mapStateToProps = state => {
    return {
        ...state.reducerLogin.user
    };
};

export default connect(mapStateToProps)(WelcomeMessage);