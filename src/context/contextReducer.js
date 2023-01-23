// import React from 'react'

const contextReducer = (state, action) => {
  let transactions;
//i used "let" transactions above to create an undefined hook with transactions because i want the hook transactions to have different at different places
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);
            return transactions;

        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            return transactions;
    
        default:
            return state;
    }

// if (action.type === 'DELETE_TRANSACTION') {
    
// }
// else if (action.type === 'ADD-TRANSACTION') {
    
// }
}

export default contextReducer