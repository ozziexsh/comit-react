import React from 'react';

function Input(props) {
    function handleChange(event) {
        props.onChange(event.currentTarget.value);
    }

    return (
        <input 
            type={props.type}
            value={props.value}
            onChange={handleChange}
        />
    )
}

export default Input;
