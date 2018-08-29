import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import validate from './validate';
import { Label, Button, FormGroup, Alert } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} />
                <br />
                {touched &&
                    ((error && <Label bsStyle="danger">{error}</Label>))}
            </div>
        </div>
    )

export const SolicitudForm = props => {
    const { loadAvailableDays, guardar, consultar, handleSubmit,
        avalableDaysData, user, availableDaysVacation, mensaje } = props;
    loadAvailableDays(user.user);
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <div>
                        <h2>Solicitud</h2>
                        <form onSubmit={handleSubmit((values) => {
                            values.user = user.user;
                            return guardar(values)
                        })}>
                            <div className="form">
                                <div className="user-info">
                                    <Label bsStyle="primary"> Días disponibles: {avalableDaysData} </Label>
                                </div>
                                <FormGroup controlId="formInlineDate">
                                    <Label>Fecha de Inicio</Label>
                                    <Field type="Date" name="startDate" component={renderField}
                                        onBlur={handleSubmit((values) => {
                                            values.user = user.user;
                                            return consultar(values)
                                        })}
                                    />
                                </FormGroup>
                                <FormGroup controlId="formInlineDate">
                                    <Label>Fecha de Fin</Label>
                                    <Field type="Date" name="endDate" component={renderField}
                                        onBlur={handleSubmit((values) => {
                                            values.user = user.user;
                                            return consultar(values)
                                        })}
                                    />
                                </FormGroup>
                                {mensaje === '' ? <div /> : <Alert>{mensaje}</Alert>}
                                <Button className="my-button" bsStyle="success" type="submit" disabled={availableDaysVacation}>Solicitar</Button>
                            </div>
                        </form>
                    </div >
                </div>
            </div>
        </div>
    );
}

const Solicitud = reduxForm({
    form: 'SolicitudForm',
    validate
})(SolicitudForm)

const mapStateToProps = state => {
    return {
        ...state.login,
        ...state.SolicitudVacaciones
    };
};

export default connect(
    mapStateToProps,
    action
)(Solicitud);