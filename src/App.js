import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Cam', age: 34 },
      {name: 'Elise', age: 31 },
      {name: 'Ainslee', age: 12 },
      {name: 'Elden', age: 8 }
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    // Don't do this. this.state.persons[0] = 'Cameron';
    this.setState( {
      persons: [
        {name: 'Cameron', age: 34 },
        {name: 'Elise', age: 32 },
        {name: 'Ainslee', age: 12 },
        {name: 'Elden', age: 9 }
      ]
      } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working.</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My Hobbies: Muay Thai.</Person>  
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>  
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>  
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>  
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React app!!!'));
  }
}

export default App;
