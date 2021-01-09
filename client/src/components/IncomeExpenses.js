import React,{useContext} from 'react';
import {GlobalSite} from '../context/GlobalSite'
import {formatNumber} from '../utils/format'
const IncomeExpenses=()=>{

  const {transactions} = useContext(GlobalSite)

  const amounts = transactions.map(transactions => transactions.amount);

  const income = amounts.filter( item=> item > 0 )
                         .reduce((acc, item)=>(acc+=item), 0)
                          .toFixed(2);
      
      const expense = (
        amounts.filter(item=> item < 0).reduce((acc, item) => (acc +=item), 0)*-1).toFixed(2)

    return(
        <div className="inc-exp-container">
         <div>
           <h4>Ingresos</h4>
           <p className="money plus">${formatNumber(income)}</p>
         </div>
         <div></div>
         <div>
          <h4>Gastos</h4>
          <p className="money minus">-${formatNumber(expense)}</p>
         </div>
        </div>
    )
}

export default IncomeExpenses