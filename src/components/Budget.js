import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
            contentEditable='true'
            type='number'
            id='budget'
            step='10'
            max='20000'
            value={budget}
            style={{marginLeft:'5px'}}
            //onChange={(event) => setCost(event.target.value)}
           ></input>
        </div>
    );
};
export default Budget;


/* <input
required='required'
type='number'
id='cost'
value={cost}
style={{ marginLeft: '2rem' , size: 10}}
onChange={(event) => setCost(event.target.value)}>
</input> */