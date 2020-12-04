import React, { useReducer } from "react";
import { GlobalSite } from "./GlobalSite";
import AppReducer from "./AppReducer";
import  clienteAxios  from '../api/axios'

//TYPES
import {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  GET_TRANSACTION,
  ERROR_TRANSACTION,
  UPDATE_TRANSACTION
} from "../types/Types";

const Initial_State = {
  transactions: [],
  error: null,
  loading: true,
};

//provider componen
export const GlobalProvider = ({children}) => {
  //state
  const [state, dispatch] = useReducer(AppReducer, Initial_State);

  //actions

  const getTransactions = async () => {
    try {
      const result = await clienteAxios.get("/transaction");

      dispatch({
        type: GET_TRANSACTION,
        payload: result.data.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_TRANSACTION,
        payload: err.error,
      });
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await clienteAxios.delete(`/delete-transaction/${id}`);

      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: ERROR_TRANSACTION,
        payload: err.res.data.error,
      });
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const params = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await clienteAxios.post(
        "/add-transaction",
        transaction,
        params
      );

      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR_TRANSACTION,
        payload: err.res.data.error,
      });
    }
  };

  const updateTransaction = async (datos,id) => {
    try {
      const params = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await clienteAxios.put(`/update-transaction/${id}`,datos,params);
      
      dispatch({
        type: UPDATE_TRANSACTION,
        payload: res.data
      });
    } catch(err) {
      console.log(err)
      dispatch({
        type: ERROR_TRANSACTION,
        payload: err.error
      });
    }
  };

  return (
    <GlobalSite.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        //funciones
        deleteTransaction,
        addTransaction,
        getTransactions,
        updateTransaction
      }}
    >
      {children}
    </GlobalSite.Provider>
  );
};
