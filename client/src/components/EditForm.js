import React,{useState, useContext} from 'react';
import {GlobalSite} from '../context/GlobalSite'
const EditForm=({item, id, setIsOpen})=>{

    const [newData, setNewData]=useState(item)
  
    //context
    const {updateTransaction} = useContext(GlobalSite)    

    const updateSubmit=(e)=>{
      e.preventDefault()
       const data={
         text:newData.text,
         amount:newData.amount
       }
         updateTransaction(data, id)
         setIsOpen(false)
    }


    return(
      <form onSubmit={updateSubmit}>
        <div className="form-div">
          <label htmlFor="text">Nombre:</label>
          <input
            type="text"
            name="text"
            value={newData.text}
            placeholder="Enter Text"
            onChange={(e) => setNewData({...newData, text:e.target.value})}
          />
        </div>
        <div className="form-div">
          <label htmlFor="amount">
          Monto: <br /> (gasto - negativo, ingreso - positivo)
          </label>
          <input
          name="amount"
            type="number"
            placeholder="Enter amount...."
            value={newData.amount}
            onChange={(e) => setNewData({...newData, amount:e.target.value})}
          />
        </div>
        <button type="submit" className="button">
          Editar Transacción
        </button>
      </form>
    )
}

export default EditForm