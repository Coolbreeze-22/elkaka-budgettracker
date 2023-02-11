import React, { createContext, useReducer } from 'react'
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('state')) || [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Action Creators
    const deleteTransaction = (id) =>  dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) =>  dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    // console.log(transactions);

    const balance = transactions.reduce((x, y) => { return (y.type === 'Expense' ? x - y.amount : x + y.amount)}, 0);

    return(
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions, balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}