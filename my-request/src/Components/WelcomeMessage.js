import React from 'react';
import { connect } from 'react-redux';
import { loadProducts,loadAvailableDays } from '../actionCreators';



const WelcomeMessage = ({name, lastName, user, loadProducts}) => {
    
    console.log(user);
    loadProducts(user)
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
      loadProducts(user) {
        dispatch(loadProducts(user));
      },
      loadAvailableDays(userName) {
        dispatch(loadAvailableDays(userName));
      }
    }
    
  };

export default connect(mapStateToProps,mapDispatchToProps)(WelcomeMessage);