import React from 'react';
import { connect } from 'react-redux';
import { loadProducts, loadAvailableDays } from '../actionCreators';

const WelcomeMessage = ({ name, lastName, user, loadProducts, loadAvailableDays }) => {
    console.log(user);
    loadProducts(user)
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
        loadProducts(user) {
            dispatch(loadProducts(user));
        },
        loadAvailableDays(userName) {
            dispatch(loadAvailableDays(userName));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeMessage);