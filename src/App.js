import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import STORE from "./STORE";
import DataContext from "./context/data/dataContext";

import SideBar from "./components/sidebar/Sidebar";
import Person from "./components/data/Person";

const App = () => {
  const dataContext = useContext(DataContext);
  const { setInitialState, data } = dataContext;
  const [personData, setPersonData] = useState('person-1');

  useEffect(() => {
    setInitialState(STORE);
    console.log(STORE);
  }, []);


  const personChangeHandler = (person) => {
    setPersonData(person)
  }


  return (
    <Router>
      <div className='container'>
        <div className='wrapper'>
          <header className='main-head'>Dashboard</header>
          <nav className='main-nav'>
            <h4>Personnel</h4>
            <ul>
              {data && 
                data.peopleArray.map((person) => (
                  <li key={person}>
                    <button onClick={()=> personChangeHandler(person)} >{person}</button>
                  </li>
                ))}
            </ul>
          </nav>

          <Person name={personData}/>
          <aside className='side'>Sidebar</aside>
          <div className='ad'>Advertising</div>
          <footer className='main-footer'>The footer</footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
