import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import STORE from "./STORE";
import DataContext from "./context/data/dataContext";

import Person from "./components/data/Person";
import Project from "./components/data/Project";
import People from "./components/charts/People";
import Projects from "./components/charts/Projects";

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
      <nav className='main-nav'>
        <h2>Dan's DashBoard</h2>
      </nav>
      <div className='container'>
        <div className='wrapper'>
          <nav className='people-nav'>
            <div className='title-div'>
              <h4 className='title'>Personnel</h4>
              <ul>
                {data &&
                  data.peopleArray.map((person) => (
                    <li className='nav-li' key={person}>
                      <button
                        className='nav-btn'
                        onClick={() => personChangeHandler(person)}
                      >
                        {person}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>
          <nav className='project-nav'>
            <div className='title-div'>
              <h4 className='title'>Project</h4>

              <ul>
                {data &&
                  data.projectsArray.map((project) => (
                    <li className='nav-li' key={project}>
                      <button
                        className='nav-btn'
                        onClick={() => projectChangeHandler(project)}
                      >
                        {project}
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </nav>

          <Person name={personData} />
          <People  />
          <Project name={projectData} />
          <Projects />
          <footer className='main-footer'>The footer</footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
