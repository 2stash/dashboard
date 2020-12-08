import React, { useReducer } from "react";
import DataContext from "./dataContext";
import DataReducer from "./dataReducer";
import { SET_STORE, IMPORT_DATA } from "../types";

const DataState = (props) => {
  const initialState = {
    data: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const setInitialState = (data) => {
    dispatch({ type: SET_STORE, payload: data });
  };

  const importData = (data) => {
    console.log(data)
    let projectSet = new Set();
    let peopleSet = new Set();
    let personActionsByProject = {};
    let personProjectList = []
    let actions = {}

    // Create list of projects and people 
    // data.map(excelRow => {
    //   let actionName = projectName + excelRow.ID
    //   projectSet.add(excelRow.Project)
    //   peopleSet.add(excelRow.Owner)
    //   actions[actionName] = {
    //     "priority": excelRow.Priority,
    //     "description": excelRow.Description,
    //     "hours": excelRow.Hours,
    //     "owner": excelRow.Owner,
    //     "project": projectName
    //   }

    // })

    // loop thru people and add their projects
    
    // for(let person of peopleSet){

    //   let temp = personActionsByProject[person]

    // }


  }
  return (
    <DataContext.Provider
      value={{ data: state.data, loading: state.loading, setInitialState,importData }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
