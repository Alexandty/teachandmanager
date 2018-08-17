import React from 'react';
import { Alert } from 'react-bootstrap';

const SinSolicitudes = (props) => {
    return (<div className='sinSolicitudes'>
        <Alert bsStyle="info">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.children}
            </p>
        </Alert>
    </div>
    );
}

export default SinSolicitudes;