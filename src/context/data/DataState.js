import React, { useReducer } from "react";
import DataContext from "./dataContext";
import DataReducer from "./dataReducer";
import { SET_STORE } from "../types";

const DataState = (props) => {
  const initialState = {
    data: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const setInitialState = (data) => {
    dispatch({ type: SET_STORE, payload: data });
  };

  return (
    <DataContext.Provider
      value={{ data: state.data, loading: state.loading, setInitialState }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
