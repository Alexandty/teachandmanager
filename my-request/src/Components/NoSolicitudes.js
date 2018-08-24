import React from 'react';
import { Alert } from 'react-bootstrap';

const SinSolicitudes = (props) => {
    return (<div className='sinSolicitudes'>
        <Alert bsStyle="info" className="user-info">
            <h2>
                {props.title}
            </h2>
            <p>
                {props.children}
            </p>
        </Alert>
    </div>
    );
}

export default SinSolicitudes;