import React from 'react';
import { connect } from 'react-redux';
import { loadProducts } from '../actionCreators';

const WelcomeMessage = ({name, lastName, idPerson, loadProducts}) => {
    
    console.log(idPerson);
    loadProducts(idPerson)
    console.log('se despacho');
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
      loadProducts(idPerson) {
        dispatch(loadProducts(idPerson));
      }
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeMessage);