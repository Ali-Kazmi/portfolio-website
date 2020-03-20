import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/Nav';

function App() {
 

  //rendering
  return (
    <Router>
    <div className="App">
    <Nav />
    </div>
    </Router>
  )
}

export default App;
