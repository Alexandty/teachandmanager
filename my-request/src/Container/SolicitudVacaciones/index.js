import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Label, Button,  FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const Solicitud = props => {

    const { guardar , handleSubmit} = props;

    return (
        <div>
            
            <form onSubmit={handleSubmit(guardar)} >
                <h3>
                    Dias disponibles <Label bsStyle="primary">6</Label>
                </h3>
                <FormGroup controlId="formInlineDate">
                    <ControlLabel>Fecha Inicio</ControlLabel>{' '}{' '}
                    <Field type="Date" name="startDate" component={renderField} />
                </FormGroup>{' '}{' '}
                <FormGroup controlId="formInlineDate">
                    <ControlLabel>Fecha Fin</ControlLabel>{' '}
                    <Field type="Date" name="endDate" component={renderField} />
                </FormGroup>{' '}
                <Button bsStyle="success" type="submit">Success</Button>
            </form>

        </div >
    )
}

const SolicitudForm = reduxForm({
    form : 'LoginForm'
})(Solicitud)

const mapStateToProps = state => {
    return {
        ...state.addSolicitudvacaciones
    };
};

export default connect(
    mapStateToProps,
    action
)(SolicitudForm);