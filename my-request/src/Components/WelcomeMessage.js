import React from 'react';
import { connect } from 'react-redux';
import { loadRequestVacation } from '../Container/VacationsRequestList/action';

export const WelcomeMessage = ({ name, lastName, user, loadRequestVacation }) => {
    loadRequestVacation(user)
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

const mapDispatchToProps = dispatch => {
    return {
        loadRequestVacation(user) {
            dispatch(loadRequestVacation(user));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage);