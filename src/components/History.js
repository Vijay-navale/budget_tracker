import React, { useContext } from 'react';
import { IncAndExpContext } from '../context/IncAndExpContext';

const History = () => {
    const { IncAndExpData, removeIncOrExp } = useContext(IncAndExpContext);
    return (
        <React.Fragment>
            <h3>History</h3>
            <ul id='list' className='list'>
                {IncAndExpData.length > 0
                    ? IncAndExpData.map(({ id, text, amount }) =>
                          amount >= 0 ? (
                              <li className='plus' key={id} data-id={id}>
                                  {text} <span>{amount}</span>
                                  <button className='delete-btn' onClick={() => removeIncOrExp(id)}>x</button>
                              </li>
                          ) : (
                              <li className='minus' key={id} data-id={id}>
                                  {text} <span>{amount}</span>
                                  <button className='delete-btn' onClick={() => removeIncOrExp(id)}>x</button>
                              </li>
                          )
                      )
                    : ''}
            </ul>
        </React.Fragment>
    );
};

export default History;
