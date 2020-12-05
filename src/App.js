import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import STORE from "./STORE";
import DataContext from "./context/data/dataContext";

import SideBar from "./components/sidebar/Sidebar";
import Person from "./components/data/Person";
import Project from "./components/data/Project";

const App = () => {
  const dataContext = useContext(DataContext);
  const { setInitialState, data } = dataContext;
  const [personData, setPersonData] = useState("person-1");
  const [projectData, setProjectData] = useState("project-1");

  useEffect(() => {
    setInitialState(STORE);
  }, []);

  const personChangeHandler = (person) => {
    setPersonData(person);
  };

  const projectChangeHandler = (project) => {
    setProjectData(project);
  };

  return (
    <Router>
      <div className='container'>
        <div className='wrapper'>
          <header className='main-head'>Dashboard</header>
          <nav className='people-nav'>
            <div>
              <h4>Personnel</h4>
              <ul>
                {data &&
                  data.peopleArray.map((person) => (
                    <li key={person}>
                      <button onClick={() => personChangeHandler(person)}>
                        {person}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
            </nav>
            <nav className="project-nav">
            <div>
              <h4>Project</h4>
              <ul>
                {data &&
                  data.projectsArray.map((project) => (
                    <li key={project}>
                      <button onClick={() => projectChangeHandler(project)}>
                        {project}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>

          <Person name={personData} />
          <div className="people-dept">Department people</div>
          <Project name={projectData}/>
          <div className="project-dept">Department project</div>
          <footer className='main-footer'>The footer</footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
