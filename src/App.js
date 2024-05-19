import Header from './Header' ; 
import Home from './Home';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (

      <div>
           <Header/>  
           <Home/>
      </div>
      
  );
}

export default App;
