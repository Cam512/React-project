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
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // Don't do this. this.state.persons[0] = 'Cameron';
    this.setState( {
      persons: [
        {name: newName, age: 34 },
        {name: 'Elise', age: 32 },
        {name: 'Ainslee', age: 12 },
        {name: 'Elden', age: 9 }
      ]
      } )
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 34 },
        {name: 'Elise', age: 32 },
        {name: 'Ainslee', age: 12 },
        {name: 'Elden', age: 9 }
      ]
      })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
             name={this.state.persons[0].name} 
             age={this.state.persons[0].age} 
             click={this.switchNameHandler.bind(this, 'Cam!')}
             changed={this.nameChangedHandler}>My Hobbies: MuayThai.
          </Person>  
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}/>  
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>  
          <Person 
            name={this.state.persons[3].name} 
            age={this.state.persons[3].age}/>  
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working.</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React app!!!'));
  }
}

export default App;
