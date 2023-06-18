import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrentCurrency = () => {
    const { currency } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <label>Currency:</label>
            <select>
                <option value="dollar">$ Dollar</option>
                <option value="pound">£ Pound</option>
                <option value="euro">€ Euro</option>
                <option value="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default CurrentCurrency;