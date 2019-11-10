import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Numbers from "./Components/Numbers/Numbers";

class App extends Component{
  render(){
    return (
        <div className="App">
          <Numbers number="5"/>
        </div>
    );
  }
}

export default App;
