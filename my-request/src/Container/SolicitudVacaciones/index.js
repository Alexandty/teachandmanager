import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import validate from './validate';
import { Label, Button, FormGroup, ControlLabel, Row, Col, Grid } from 'react-bootstrap';
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
                {touched &&
                    ((error && <Label bsStyle="danger"  >{error}</Label>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

const SolicitudForm = props => {
    const { guardar, handleSubmit, avalableDaysData, user, pristine, submitting } = props;
    console.log(avalableDaysData)
    console.log(user)

    return (
        //onBlur={user}
        <div>
            <form onSubmit={handleSubmit((values) => {
                values.user = user.user;
                return guardar(values)
            })} >



                <Grid >
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            Dias disponibles <Label bsStyle="primary"> {avalableDaysData} </Label>
                            <FormGroup controlId="formInlineDate">
                                <Label>Fecha de Inicio</Label>
                                <Field type="Date" name="startDate" component={renderField} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={8}>
                        <FormGroup controlId="formInlineDate">
                            <Label>Fecha de Fin</Label>
                            <Field type="Date" name="endDate" component={renderField} />
                        </FormGroup>
                        </Col>
                        <Button bsStyle="success" type="submit" disabled={pristine || submitting}>Solicitar</Button>

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
        ...state.reducer
    };
};

export default connect(
    mapStateToProps,
    action
)(Solicitud);