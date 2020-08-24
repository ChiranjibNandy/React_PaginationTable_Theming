import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomTableComponent from "./components/CustomTableComponent";
import CustomThemingComponent from "./components/CustomThemingComponent";

function App() {
  return (
    <div className="App">
      <CustomTableComponent />
      <CustomThemingComponent title='Example Component' />
    </div>
  );
}

export default App;
