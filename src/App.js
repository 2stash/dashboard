import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import STORE from "./STORE";
import DataContext from "./context/data/dataContext";

import Person from "./components/data/Person";
import Project from "./components/data/Project";
import People from "./components/charts/People";
import Projects from "./components/charts/Projects";

import * as XLSX from 'xlsx';

const App = () => {
  const dataContext = useContext(DataContext);
  const { setInitialState, data, importData } = dataContext;
  const [personData, setPersonData] = useState("person-1");
  const [projectData, setProjectData] = useState("project-1");
  const [fileData, getFileData] = useState([]);

  useEffect(() => {
    setInitialState(STORE);
  }, []);

  const personChangeHandler = (person) => {
    setPersonData(person);
  };

  const projectChangeHandler = (project) => {
    setProjectData(project);
  };

  const readExcel = (e) => {
    const uploadedFiles = e.target.files;
    const uploadedFilesDataArray = [];
    
    for(let i = 0; i < uploadedFiles.length; i++){
      let promise = new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(uploadedFiles[i])
  
        fileReader.onload=(e)=> {

          let bufferArray = e.target.result;
  
          let wb = XLSX.read(bufferArray, {type: 'buffer'});
  
          let wsname = wb.SheetNames[0];
  
          let ws = wb.Sheets[wsname];
  
          let data = XLSX.utils.sheet_to_json(ws)
  
          resolve([data, wsname])
        }
  
        fileReader.onerror = ((error)=>{
          reject(error)
        })
      })
  
      promise.then((info)=> {
        let data = info[0]
        let wsname = info[1]
        uploadedFilesDataArray.push([data,wsname])
      })
        getFileData(uploadedFilesDataArray)
        importData(uploadedFilesDataArray)

    }


    // const promise = new Promise((resolve, reject) => {
    //   const fileReader = new FileReader();
    //   fileReader.readAsArrayBuffer(file)

    //   fileReader.onload=(e)=> {
    //     // console.log(e.target)
    //     const bufferArray = e.target.result;

    //     const wb = XLSX.read(bufferArray, {type: 'buffer'});

    //     const wsname = wb.SheetNames[0];

    //     const ws = wb.Sheets[wsname];

    //     const data = XLSX.utils.sheet_to_json(ws)

    //     resolve([data, wsname])
    //   }

    //   fileReader.onerror = ((error)=>{
    //     reject(error)
    //   })
    // })

    // promise.then((info)=> {
    //   const data = info[0]
    //   const wsname = info[1]
    //   getFileData(data)
    //   importData(data, wsname)
    // })
  }


  return (
    <Router>
      <nav className='main-nav'>
        <h2>Dan's DashBoard</h2>
        <input type="file" onChange={readExcel} multiple/>
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
