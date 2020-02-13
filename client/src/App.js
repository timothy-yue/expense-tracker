import React, { Component } from 'react';
import './App.css';

// Import components
import Accumalator from './components/Accumalator';
import Transaction from './components/Transaction';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0, 
      transactions: [], 
      categories: [],
      testTransaction: {
        title: 'Coffee', 
        description: 'with Peter Bower', 
        price: 50
      }
    }
  }

  // Function to increment total value
  addToTotal = (amount) => {
    console.log(amount);
    this.setState(prev => ({ total : prev.total + amount }));
  }

  render() {
    return (
      <div className="App">
        PWA
        <Accumalator total={this.state.total}  />
        <bold>All Expenses</bold>
        <Transaction transaction={this.state.testTransaction} />
        <button onClick={() => this.addToTotal(3)}>Add One</button>
      </div>
    )
  }
}

export default App;
