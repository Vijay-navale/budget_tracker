import React, { createContext, useEffect, useState } from 'react';

export const IncAndExpContext = createContext();

const IncAndExpContextProvider = (props) => {
    const [IncAndExpData, setIncAndExpData] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem('IncAndExpDataLS');

        if (localData) {
            setIncAndExpData(JSON.parse(localData));
        }
    }, []);

    const addIncOrExp = (data) => {
        setIncAndExpData([...IncAndExpData, data]);
    };

    useEffect(() => {
        localStorage.setItem('IncAndExpDataLS', JSON.stringify(IncAndExpData));
    }, [IncAndExpData]);

    const getPlusSum = () => {
        let plusSum = 0;
        IncAndExpData.forEach(({amount}) => {
            if(amount >= 0){
                plusSum += amount;
            }
        })
        return plusSum;
    }
    const getMinusSum = () => {
        let minusSum = 0;
        IncAndExpData.forEach(({amount}) => {
            if(amount < 0){
                minusSum += (amount);
            }
        })
        return -(minusSum);
    }

    const totalBalance = () => {
        return getPlusSum() - getMinusSum()
    }

    const removeIncOrExp = id => {
        setIncAndExpData(IncAndExpData.filter(data => data.id !== id))
    }
    return (
        <IncAndExpContext.Provider value={{ IncAndExpData, addIncOrExp, getPlusSum, getMinusSum, totalBalance, removeIncOrExp }}>
            {props.children}
        </IncAndExpContext.Provider>
    );
};

export default IncAndExpContextProvider;
