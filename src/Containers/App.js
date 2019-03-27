import React, { Component } from 'react';

import classes from './App.css';
import Person from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id:'aldkd3', name: 'Cam', age: 34 },
      {id: 'asja1', name: 'Elise', age: 31 },
      {id: 'akfk4', name: 'Ainslee', age: 12 },
      {id: 'lakf6', name: 'Elden', age: 8 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
      persons: persons, 
      changeCounter: prevState.changeCounter + 1 
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };
 
  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (<Person 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    };
    

    return (
        <Aux>
        <button 
        onClick={() => {
          this.setState({showCockpit: false});
          }}>
          Remove Cockpit
          </button>
           {this.state.showCockpit ? ( 
           <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
           />
            ) : null}
            {persons}
        </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React app!!!'));
  }
};

export default withClass (App, classes.App);
