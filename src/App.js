import React, { useEffect, useContext, useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import DataContext from "./context/data/dataContext";

import Person from "./components/data/Person";
import Project from "./components/data/Project";
import People from "./components/charts/People";
import Projects from "./components/charts/Projects";

import LandingPage from "./components/landing/LandingPage";

const App = () => {
  const dataContext = useContext(DataContext);
  const {
    setInitialState,
    data,
    importData,
    importedData,
    processData,
  } = dataContext;

  const [personData, setPersonData] = useState("");
  const [projectData, setProjectData] = useState("");
  const [hideshow, setHideShow] = useState({});

  const [fileData, getFileData] = useState([]);

  if (data !== null && personData === "") {
    setPersonData(data.peopleArray[0]);
  }

  if (data !== null && personData === "") {
    setProjectData(data.projectsArray[0]);
  }

  const personChangeHandler = (person) => {
    setPersonData(person);
  };

  const projectChangeHandler = (project) => {
    setProjectData(project);
  };

  const handleResetData = () => {
    window.location.reload(false);
  };

  return (
    <Router>
      <nav className='main-nav'>
        <div className='logo'>
          <h2>ExcelDash</h2>
          <div className="logo-div">
          <span className="logo-span"><i className="fas fa-running fa-lg"></i></span>
          </div>
        </div>

        {/* <ul>
          <li>
            <Link>Try It</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
      
        </ul> */}
        {data && <button onClick={handleResetData}>Reset Data</button>}
      </nav>
      <div >
        {data ? (
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
            <People />
            <Project name={projectData} />
            <Projects />
            <footer className='main-footer'></footer>
          </div>
        ) : (
          <LandingPage />
        )}
      </div>
    </Router>
  );
};

export default App;
