import React, { useReducer } from "react";
import DataContext from "./dataContext";
import DataReducer from "./dataReducer";
import { SET_STORE, IMPORT_DATA, BUILD_DASHBOARD } from "../types";

const DataState = (props) => {
  const initialState = {
    data: null,
    loading: false,
    importedData: null,
    processedData: null,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const setInitialState = (data) => {
    dispatch({ type: SET_STORE, payload: data });
  };

  const importData = (data) => {
    dispatch({ type: IMPORT_DATA, payload: data });
  };

  const processData = (data) => {
    let personActionsByProject = {};
    let peopleSet = new Set();
    let projectSet = new Set();
    let actions = {};
    let newStore = {};
    let actionNameList = []

    data.map((project) => {
      // Build Unique Program Name Set
      projectSet.add(project[1]);

      // Map Through Each Excel Row
      project[0].map((excelRow) => {
        // Build Unique Person Name Set
        peopleSet.add(excelRow.Owner);
      });
    });

    for (let person of peopleSet) {
      personActionsByProject[person] = {};

      // Create list of Actions
      data.map((projectArray) => {
        let projectName = projectArray[1];

        projectArray[0].map((excelRow) => {
          let actionName = projectName + excelRow.ID;
          actionNameList.push(actionName)
          actions[actionName] = {
            priority: excelRow.Priority,
            description: excelRow.Description,
            hours: excelRow.Hours,
            owner: excelRow.Owner,
            project: projectName,
          };
        });
      });
    }

    // Add Action Item List to Store
    newStore.actions = actions;

    // Add project list to Store
    let projectsArray = Array.from(projectSet);
    newStore.projectsArray = projectsArray;

    // Add people list to Store
    let peopleArray = Array.from(peopleSet);
    newStore.peopleArray = peopleArray;

    // Add list of people to Store
    newStore.personActionsByProject = personActionsByProject;

    for (let person of peopleSet) {
      let tempPersonProjectSet = new Set() 
      let projects = {}
      // Create list of Actions
      data.map((projectArray) => {
        let projectName = projectArray[1];
        let actionList = []
   
        //Map thru each excel row
        projectArray[0].map((excelRow) => {
          if(excelRow.Owner === person){
            // If Person array equals owner add to set
            tempPersonProjectSet.add(projectName)

            let actionName = projectName + excelRow.ID;
            actionList.push(actionName)   
            

            projects[projectName] = actionList
            
          }   
    

        });

        newStore.personActionsByProject[person].projects = projects

        // add projectList to store per person
        let tempPersonProjectArray = Array.from(tempPersonProjectSet)
        newStore.personActionsByProject[person].projectList = tempPersonProjectArray
      });


    }

    // console.log(newStore);
    dispatch({ type: BUILD_DASHBOARD, payload: newStore });
  };

  return (
    <DataContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        importedData: state.importedData,
        processedData: state.processedData,
        setInitialState,
        importData,
        processData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
