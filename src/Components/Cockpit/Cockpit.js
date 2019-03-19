import React, {useEffect} from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    };
  });

    const assignedClasses = []; 
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personslength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personslength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>App is running!</p>
            <button 
              className={btnClass}
              onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};


export default React.memo(cockpit);