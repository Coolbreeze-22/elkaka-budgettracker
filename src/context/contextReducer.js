// import React from 'react'

const contextReducer = (state, action) => {
  
//i used "let" transactions above to create an undefined hook with transactions because i want the hook transactions to have different at different places
// ohh...seems the code for the above statement has been deleted  
switch (action.type) {
        case 'DELETE_TRANSACTION':
            state = state.filter((t) => t.id !== action.payload);
            localStorage.setItem('state', JSON.stringify(state));
            return state;
        
        case 'ADD_TRANSACTION':
            state = [ ...state, action.payload];
            localStorage.setItem('state', JSON.stringify(state));
            return state;

            case 'UPDATE_TRANSACTION':
            localStorage.setItem('state', JSON.stringify(state.map((t) => t.id === action.payload.id ? action.payload : t)));
            return state.map((t) => t.id === action.payload.id ? action.payload : t);

        default:
            return state;
    }

// if (action.type === 'DELETE_TRANSACTION') {
    
// }
// else if (action.type === 'ADD-TRANSACTION') {
    
// }
}

export default contextReducer