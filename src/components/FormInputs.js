import React, { useState, useContext } from 'react';
import uuid from 'react-uuid';
import { IncAndExpContext } from '../context/IncAndExpContext';

const FormInputs = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addIncOrExp } = useContext(IncAndExpContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== '' && amount !== null) {
            let data = {
                id: uuid(),
                text,
                amount: parseInt(amount)
            };

            addIncOrExp(data);

            setText('');
            setAmount('');
        } else {
            alert('Please insert text and amount');
        }
    };

    return (
        <React.Fragment>
            <h3>Add new transaction</h3>
            <form id='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        id='text'
                        placeholder='Enter text...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type='number'
                        id='amount'
                        placeholder='Enter amount...'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </React.Fragment>
    );
};

export default FormInputs;
