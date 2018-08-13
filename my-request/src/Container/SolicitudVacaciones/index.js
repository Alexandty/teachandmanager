import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import validate from './validate';
import { Label, Button, FormGroup, Row, Col, Grid } from 'react-bootstrap';
import { Field, reduxForm , isPristine} from 'redux-form';


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
                    ((error && <Label bsStyle="danger">{error}</Label>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

export const SolicitudForm = props => {
    const { loadAvailableDays, guardar, consultar, handleSubmit,
        avalableDaysData, user, availableDaysVacation, pristine } = props;
    loadAvailableDays(user.user)
    return (
        <div>
            <form onSubmit={handleSubmit((values) => {
                values.user = user.user;
                return guardar(values)
            })}>
                <Grid >
                    <Row className="show-grid">
                        <div>
                            <Col xs={6} md={12}>
                                Dias disponibles <Label bsStyle="primary"> {avalableDaysData} </Label>
                                <FormGroup controlId="formInlineDate">
                                    <Label>Fecha de Inicio</Label>
                                    <Field type="Date" id='idStartDate' name="startDate" component={renderField}
                                        onBlur={handleSubmit((values) => {
                                            values.user = user.user;
                                            return consultar(values)
                                        })}
                                    />
                                </FormGroup>
                                <FormGroup controlId="formInlineDate">
                                    <Label>Fecha de Fin</Label>

                                    <Field type="Date" id='idEndtDate' name="endDate" component={renderField}
                                        onBlur={handleSubmit((values) => {
                                            values.user = user.user;
                                            return consultar(values)
                                        })}
                                    />
                                </FormGroup>
                                <Button bsStyle="success" type="submit"  disabled={availableDaysVacation }>Solicitar</Button>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </form>
        </div >
    )
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