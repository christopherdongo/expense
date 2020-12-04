import React, { useState, useContext } from "react";
import { GlobalSite } from "../context/GlobalSite";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddTransaction = () => {
  //state
  const [text, setText] = useState("");
  const [amount, setAmout] = useState("");

  const { addTransaction } = useContext(GlobalSite);

  const notifyError=()=>{
    toast.error('🦄 All fields are required!', {
      position: toast.POSITION.TOP_RIGHT,
      });
  }

  const notifySuccess=()=>{
    toast.success('🦄 success!!', {
      position: toast.POSITION.TOP_RIGHT
      });
  }

  const addSubmit = (e) => {
    e.preventDefault();
    if(text==='' || amount===''){
      notifyError();
    }else{
    const transaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(transaction);
    notifySuccess();
    setText('');
    setAmout('');
  }
  };

  return (
    <>
      <h3>Ingresar Transaccion</h3>
      <form onSubmit={addSubmit}>
        <div className="form-div">
          <label htmlFor="text">Nombre</label>
          <input
            id="text"
            type="text"
            name="text"
            value={text}
            placeholder="Enter Text"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-div">
          <label htmlFor="amount">
            Monto: <br /> (gasto - negativo, ingreso - positivo)
          </label>

          <input
            id="amount"
            name="amount"
            type="number"
            placeholder="Enter amount...."
            value={amount}
            onChange={(e) => setAmout(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
         Agregar Gasto
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
