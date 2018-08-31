import React from 'react';
import { connect } from 'react-redux';
import holasolver from '../holasolver.png';

export const WelcomeMessage = ({ name, lastName, user }) => {
    if (!name) {
        return <div className="noname">...</div>
    }
    return (
        <div>
            <h1 className="saludo">Bienvenido</h1>
            <h3>{name} {lastName}</h3>
            <img src={holasolver} width="800" height="640" alt="saludo"></img>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.login.user

    };
};

export default connect(mapStateToProps)(WelcomeMessage);