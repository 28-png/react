import React from 'react';
import HelloWorld from './Components/HelloWorld';
import './App.css';
import CounterExample from './Components/CounterExample';
import Header from './Components/header';

function App() {
  return (
   <div>
       { <Header /> }

     <HelloWorld name="Matthew" />

     {/* <CounterExample /> */}
   </div>
  );
}

export default App;
