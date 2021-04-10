import React, { useContext } from 'react';
import { IncAndExpContext } from '../context/IncAndExpContext';

const IncomeAndExpenses = () => {
    const {getPlusSum, getMinusSum} = useContext(IncAndExpContext);

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus'>
                    Rs{getPlusSum()}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id='money-minus' className='money minus'>
                    Rs{getMinusSum()}
                </p>
            </div>
        </div>
    );
}

export default IncomeAndExpenses;
