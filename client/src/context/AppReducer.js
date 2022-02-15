
import {DELETE_TRANSACTION, 
    ADD_TRANSACTION, 
    GET_TRANSACTION, 
    ERROR_TRANSACTION,
    UPDATE_TRANSACTION
    } from '../types/Types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) =>{
    switch(action.type){
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(transactions => transactions._id !== action.payload)
            }
        case GET_TRANSACTION:
            return{
                ...state,
                loading:false,
                transactions: action.payload, ...state.transactions //agregar la transacion
            }
        case ADD_TRANSACTION:
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case ERROR_TRANSACTION:
            return{
              ...state,
              error:action.payload
            }
        case UPDATE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.map( item=>item._id === action.payload._id ? action.payload : item)
            }
        default:
            return state;
    }
}