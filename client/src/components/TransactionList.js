import React,{useContext, useEffect} from 'react';
import {GlobalSite} from '../context/GlobalSite'
import Transaction from './Transaction'
const TransactionList =()=>{

    const {transactions, getTransactions} = useContext(GlobalSite)
  
    useEffect( ()=>{
            getTransactions()
        
    // eslint-disable-next-line
    }, [])

    return(
        <>
         <h3>History</h3>
         <div className="div-history">
         <ul className="list">
         { transactions.map( item => {
             return( 
               <Transaction key={item._id} item={item}/>
             )
         }) }
           
         </ul>
         </div>
        </>
    )
}

export default TransactionList