import React from 'react';
import { Alert } from 'react-bootstrap';

const SinSolicitudes = (props) => {
    return (<div className='sinSolicitudes'>
        <Alert bsStyle="info">
            <h4>
                {props.title}
            </h4>
            <p>
                {props.children}
            </p>
        </Alert>
    </div>
    );
}

export default SinSolicitudes;