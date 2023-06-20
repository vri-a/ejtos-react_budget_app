import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrentCurrency = () => {
    const { currency } = useContext(AppContext);
    return (
        
        // <div className='alert alert-primary'>
        //     <label>Currency:</label>
        //     <select>
        //         <option value="dollar">$ Dollar</option>
        //         <option value="pound">£ Pound</option>
        //         <option value="euro">€ Euro</option>
        //         <option value="ruppee">₹ Ruppee</option>
        //     </select>
        // </div>
        <div className='alert alert-success'>
            <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true"  style={{ backgroundColor: '#94E09C', color:'#fff', outline:'0'}}>
                Currency ({currency} Pound)
            </button>
            <ul class="dropdown-menu dropdown-menu-success">
                <li><a class="dropdown-item" href="#" style={{ backgroundColor: '#94E09C'}}>$ Dollar</a></li>
                <li><a class="dropdown-item" href="#"  style={{ backgroundColor: '#94E09C'}}>£ Pound</a></li>
                <li><a class="dropdown-item" href="#"  style={{ backgroundColor: '#94E09C'}}>€ Euro</a></li>
                <li><a class="dropdown-item" href="#"  style={{ backgroundColor: '#94E09C'}}>₹ Ruppee</a></li>
            </ul>
            </div>
        </div>
    );
};
export default CurrentCurrency;