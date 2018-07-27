import React from 'react';
import { connect } from 'react-redux';

const solicitudVacaciones = ({user}) => {
    startDate: '';
    endDate: '';
    username: user.username;
};

const mapStateToProps = state => {
    return {
        ...state
    };
};
