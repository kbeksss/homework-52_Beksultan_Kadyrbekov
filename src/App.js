import React, {Component} from 'react';
import './App.css';
import RandomNumbers from "./Components/RandomNumbers/RandomNumbers";

class App extends Component{
  render(){
    return (
        <div className="App">
            <RandomNumbers/>
        </div>
    );
  }
}

export default App;
