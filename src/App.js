import React from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends React.Component{  

  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    //Não é correto em React
    //this.state.loading = true;
    //Correto
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');
    console.log(res.data);
    this.setState({ users: res.data, loading: true });
  }

  render(){    
  return (
    <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github" />
      <div className="container">
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
      
    </div>
  );
  }
}

export default App;
