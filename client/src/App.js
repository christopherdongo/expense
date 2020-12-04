import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance.js";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import "./sytles.css";
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="row container1">
          <div className="col-xl-12">
            <Balance />
            <IncomeExpenses />
          </div>
        </div>
        <div className="row container2">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 w-full">
            <AddTransaction />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 w-100 tracker-list">
            <TransactionList />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
