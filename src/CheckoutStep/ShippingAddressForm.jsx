import React, { useContext, useState } from 'react';
import Button from '../Button';
import { AppContext } from '../Context/AppContext';
import AddressInput from './AddressInput';

const ShippingAddressForm = () => {
    const { cart } = useContext(AppContext);
    
    const [email, setEmail] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [postcode, setPostcode] = useState(null);
    const [telephone, setTelephone] = useState(null);
    
    const onSaveAddressFn = (e) => {
        e.preventDefault();
        console.log('full details', email, firstname, lastname, street, city, postcode, telephone);
    }
    
    const fields = [
        { type: 'email', className: 'form-input', name: 'email', placeholder: 'Email address', setStateFn: setEmail},
        { type: 'text', className: 'form-input', name: 'firstname', placeholder: 'First Name', setStateFn: setFirstname},
        { type: 'text', className: 'form-input', name: 'lastname', placeholder: 'Last Name', setStateFn: setLastname},
        { type: 'text', className: 'form-input', name: 'street', placeholder: 'Street', setStateFn: setStreet},
        { type: 'text', className: 'form-input', name: 'city', placeholder: 'City', setStateFn: setCity},
        { type: 'text', className: 'form-input', name: 'postcode', placeholder: 'Postal Code', setStateFn: setPostcode},
        { type: 'text', className: 'form-input', name: 'telephone', placeholder: 'Phone number', setStateFn: setTelephone},
    ];
    
    return (
        <form action="" id="shipping-address-form" method="POST">
            {
                fields.map((field, index) => {
                    return <AddressInput field={field} key={index} />
                })
            }
            <Button className="btn btn-primary" title="Save Address" onClick={onSaveAddressFn}>Save Addresss</Button>
        </form>
    )

}

export default ShippingAddressForm;