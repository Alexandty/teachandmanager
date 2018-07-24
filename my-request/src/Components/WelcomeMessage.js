import React from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../actionCreators';

const WelcomeMessage = ({name, lastName, id}) => {
    loadProducts(id)
    if (!name) {
        return <div>...</div>
    }
    return (
        <div>
        <h1 className="saludo">Bienvenido</h1>
        <h2>{name} {lastName}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.reducerLogin.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
      loadProducts(id) {
        dispatch(loadProducts(id));
      }
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeMessage);