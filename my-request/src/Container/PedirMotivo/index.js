import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Form, Field, reduxForm } from 'redux-form';
import validate from './validate';
import RenderField from '../../Components/RenderField';

export const Motivo = (props) => {
    const { enviarMotivo, handleSubmit, pristine, mostrar, titulo } = props;
    return (
        <Modal show={mostrar}>
            <Modal.Header>
                <Modal.Title>
                    {titulo}
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit((values) => { return enviarMotivo(values.motivo) })}>
                <Modal.Body>
                    <Field name={'motivoIngresado'} component={RenderField} type='textarea' style={{ width: '506px' }}></Field>
                </Modal.Body>
                <Modal.Footer>
                    <Button type='submit' disabled={pristine} bsStyle='success' >
                        Enviar
                </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

const PedirMotivo = reduxForm({
    form: 'motivo',
    validate
})(Motivo)

export default PedirMotivo;