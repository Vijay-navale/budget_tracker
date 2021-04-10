import React, { useContext } from 'react';
import { IncAndExpContext } from '../context/IncAndExpContext';

const Balance = () => {
    const {totalBalance} = useContext(IncAndExpContext)
    return (
        <React.Fragment>
            <h4>Your Balance</h4>
            <h1 id='balance'>Rs {totalBalance()}</h1>
        </React.Fragment>
    );
}

export default Balance;
