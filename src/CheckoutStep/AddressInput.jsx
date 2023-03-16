import React, { useState } from 'react';

const AddressInput = ({field}) => {
    const {type, className, name, id, placeholder, setStateFn} = field;
    return (
        <div className="row">
            <label htmlFor={name} className="required hidden">{placeholder}</label>
            <div className="form-input-container">
                <input 
                    type={type} 
                    className={className} 
                    name={name} 
                    id={id} 
                    placeholder={placeholder} 
                    onChange={e => setStateFn(e.target.value)} />
            </div>
        </div>
    )
}
export default AddressInput;