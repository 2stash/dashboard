import {SET_STORE, IMPORT_DATA} from '../types';

export default(state, action) => {
  const {type, payload} = action;
  switch(type){
    case SET_STORE:
      return {
        ...state,
        data: payload,
        loading: false
      };
    case IMPORT_DATA:
      return {
        ...state,
        loadedData: payload,
        loading: false,
      }
    default: 
      return {...state}
  }
}