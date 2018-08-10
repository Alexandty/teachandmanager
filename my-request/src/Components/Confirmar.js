import React from 'react';
import { Modal, Alert, Button } from 'react-bootstrap';

const Confirmar = (props) => {
    return (
        <Modal show={props.mostrar}>
            <Modal.Body>
                <Alert bsStyle="danger">
                    <h3>¿Esta seguro de continuar?</h3>
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle='success' onClick={props.onAceptar}>Aceptar</Button>
                <Button bsStyle='danger' onClick={props.onCancelar}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Confirmar;