import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

 {/* 
		-Initially install create-react-app
		-import react libraries
 		-Divide app into components : AddItem & ListItem
 		-import component with appropriate directory notation*/}

class App extends Component {   

  render() {
    return (
      <div>
        <Header />
          <div className="box">
            <AddItem />
            <ListItem /> 
          </div>     
      </div>
    );
  }
}

export default App;
