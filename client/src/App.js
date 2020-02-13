import React, { Component } from 'react';
import './App.css';

// Import components
import Accumalator from './components/Accumalator';
import Transactions from './components/Transactions';
import Form from './components/Form';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0, 
      transactions: [
        {
          title: 'Coffee', 
          description: 'with Peter Bower', 
          price: 50
        },
        {
          title: 'Hotel', 
          description: 'Cheap hotel at ARIA', 
          price: 150
        },
        {
          title: 'Dinner', 
          description: 'AYCE Sushi', 
          price: 520
        },
        {
          title: 'Table', 
          description: 'A table at XS', 
          price: 530
        }
      ], 
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

  calculateTotal = () => {
    let total = 0;
    this.state.transactions.forEach(transaction => total += transaction.price);
    this.setState({ total });
  }

  componentDidMount() {
    this.calculateTotal();
  }

  render() {
    return (
      <div className="App">
        PWA
        <Accumalator total={this.state.total}  />
        <bold>All Expenses</bold>
        <Transactions transactions={this.state.transactions} />
        <button onClick={() => this.addToTotal(3)}>Add One</button>
        <hr/>
        <Form />
      </div>
    )
  }
}

export default App;
