// import React from 'react'

const contextReducer = (state, action) => {
  
//i used "let" transactions above to create an undefined hook with transactions because i want the hook transactions to have different at different places
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return state.filter((t) => t.id !== action.payload);

        case 'ADD_TRANSACTION':
           state = [action.payload, ...state];
            return state;
    
        default:
            return state;
    }

// if (action.type === 'DELETE_TRANSACTION') {
    
// }
// else if (action.type === 'ADD-TRANSACTION') {
    
// }
}

export default contextReducer