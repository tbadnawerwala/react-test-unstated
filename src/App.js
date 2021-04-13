import React from "react";
import Header from './components/header';
import CustomerList from './components/customer-list';
import './App.css';
import {Counter} from './un-stated'

function App() {
  return (
    <div className="App">
      <Header />
      <Counter.Provider><CustomerList/></Counter.Provider>
    </div>
  );
}

export default App;
