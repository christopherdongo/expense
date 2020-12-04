import React,{useContext} from 'react';
import {GlobalSite} from '../context/GlobalSite'
import {formatNumber} from '../utils/format'
const Balance =()=>{

    const {transactions} = useContext(GlobalSite)

    const amounts = transactions.map( item => item.amount);
    const total = amounts.reduce((acc, item) => (acc+item),0).toFixed(2);
    return(
        <>
         <h4>Mi Balance</h4>
         <h1>${formatNumber(total)}</h1>
        </>
    )
}

export default Balance