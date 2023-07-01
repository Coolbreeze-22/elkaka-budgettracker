
const contextReducer = (state, action) => { 
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