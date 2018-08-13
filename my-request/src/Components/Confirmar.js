import React from 'react';
import { Modal, Alert, Button } from 'react-bootstrap';

const Confirmar = (props) => {
    return (
        <Modal show={props.mostrar}>
            <Modal.Header>
                <Alert bsStyle="danger">
                    ¿Esta seguro de continuar?
                </Alert>
            </Modal.Header>
            <Modal.Body>
                {props.msg}
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle='success' onClick={props.onAceptar}>Aceptar</Button>
                <Button bsStyle='danger' onClick={props.onCancelar}>Cancelar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Confirmar;