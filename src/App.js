import React from 'react';
import './App.css';
import Balance from './components/Balance';
import IncomeAndExpenses from './components/IncomeAndExpenses';
import Title from './components/Title';
import History from './components/History';
import FormInputs from './components/FormInputs';
import IncAndExpContextProvider from './context/IncAndExpContext';

const App = () => {

    return (
        <React.Fragment>
            <Title /> 
            <div className='container'>
                <IncAndExpContextProvider>
                    <Balance />
                    <IncomeAndExpenses />
                    <History />
                    <FormInputs />
                </IncAndExpContextProvider>
            </div>
        </React.Fragment>
    );
};

export default App;
