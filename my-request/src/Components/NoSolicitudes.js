import React from 'react';
import { Alert } from 'react-bootstrap';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

const SinSolicitudes = (props) => {
    return (<div className='sinSolicitudes'>
        <Alert bsStyle="info" className="request-info">
            <h3>
                {props.title}
            </h3>
            <p>
                {props.children}
            </p>
        </Alert>
    </div>
    );
}

export default SinSolicitudes;