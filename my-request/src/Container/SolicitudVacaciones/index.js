import React from 'react';
import { connect } from 'react-redux';
import action from './action';
import { Label, Button, FormGroup, ControlLabel } from 'react-bootstrap';
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

const SolicitudForm = props => {
    const { guardar, handleSubmit, avalableDaysData, user } = props;
    console.log(user);
    return (
        //onBlur={user}
        <div>
            <form onSubmit={handleSubmit((values) => {
                values.user = user.user;
                return guardar(values)
            })} >
                <h3>
                    Dias disponibles <Label bsStyle="primary"> {avalableDaysData} </Label>
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

const Solicitud = reduxForm({
    form: 'SolicitudForm',
})(SolicitudForm)

const mapStateToProps = state => {
    return {
        ...state.reducer
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         action(user) {
//             dispatch(action(user));
//         }
//     }
// };

export default connect(
    mapStateToProps,
    action
)(Solicitud);