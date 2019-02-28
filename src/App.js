import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Cam', age: 34},
      {name: 'Elise', age: 31},
      {name: 'Ainslee', age: 12},
      {name: 'Elden', age: 8}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Was clicked');
    // Don't do this. this.state.persons[0] = 'Cameron';
    setPersonsState({
      persons: [
        {name: 'Cameron', age: 34 },
        {name: 'Elise', age: 32 },
        {name: 'Ainslee', age: 12 },
        {name: 'Elden', age: 9 }
      ],
      otherState: personsState.otherState
      });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is working.</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My Hobbies: Muay Thai.</Person>  
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>  
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>  
        <Person name={personsState.persons[3].name} age={personsState.persons[3].age}/>  
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'I\'m a React app!!!'));
  
};

export default app;
