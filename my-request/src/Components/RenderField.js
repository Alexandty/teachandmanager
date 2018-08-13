import React from 'react';

const renderField = ({
    input,
    label,
    type,
    style,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
            <div>
                <textarea {...input} placeholder={label} type={type} style={style} />
                <br />
                {touched &&
                    ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    );

export default renderField;