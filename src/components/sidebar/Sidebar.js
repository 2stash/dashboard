import React, { useContext } from "react";
import {Link, Switch, Route} from 'react-router-dom';
import DataContext from "../../context/data/dataContext";
import Person from "../data/Person";

const Sidebar = (props) => {
  const dataContext = useContext(DataContext);
  const { data } = dataContext;

  return (
    <div>
    <nav className='main-nav'>
    <h4>Personnel</h4>
      <ul>
        {data && data.peopleArray.map(person => (
          <li key={person}><Link to="person">{person}</Link></li>
        ))}
      </ul>
    </nav>


    </div>
  );
};

export default Sidebar;
