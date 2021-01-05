import React from 'react';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';


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
