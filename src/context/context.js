import React, { createContext, useReducer, useState } from 'react'
import contextReducer from './contextReducer';
// import formatDate from "../utils/formatDate";

const initialState = JSON.parse(localStorage.getItem('state')) || [];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    
    const [transactions, dispatch] = useReducer(contextReducer, initialState)
    // console.log(transactions);
    // const initial = {
    //     amount: "",
    //     category: "",
    //     type: "",
    //     date: formatDate(new Date()),
    //   };

    //Action Creators
    const deleteTransaction = (id) =>  dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    const addTransaction = (transaction) =>  dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    const updateTransaction = (transaction) =>  dispatch({ type: 'UPDATE_TRANSACTION', payload: transaction });
    // const [formData, setFormData] = useState(initial);
    const [ updatedId, setUpdatedId] = useState();
    const balance = transactions.reduce((x, y) => { return (y.type === 'Expense' ? Number(x) - Number(y.amount) : Number(x) + Number(y.amount))}, 0);

    return(
        <ExpenseTrackerContext.Provider
        value={{deleteTransaction, addTransaction, updateTransaction, transactions, balance, updatedId, setUpdatedId }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}