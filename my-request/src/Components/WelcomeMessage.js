import React from 'react';
import { connect } from 'react-redux';

export const WelcomeMessage = ({ name, lastName, user }) => {
    if (!name) {
        return <div className="noname">...</div>
    }
    return (
        <div>
            <h2 className="saludo">Bienvenido</h2>
            <h3>{name} {lastName}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.login.user

    };
};

export default connect(mapStateToProps)(WelcomeMessage);