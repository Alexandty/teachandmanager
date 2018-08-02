import React from 'react';
import { connect } from 'react-redux';
import { loadRequestVacation, loadAvailableDays } from '../actionCreators';

export const WelcomeMessage = ({ name, lastName, user, loadRequestVacation, loadAvailableDays }) => {
    loadRequestVacation(user)
    loadAvailableDays(user);
    if (!name) {
        return <div>...</div>
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
        ...state.reducer.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadRequestVacation(user) {
            dispatch(loadRequestVacation(user));
        },
        loadAvailableDays(userName) {
            dispatch(loadAvailableDays(userName));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage);