import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends React.Component{  

  render(){    
  return (
    <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github" />
      <Users />
    </div>
  );
  }
}

export default App;
