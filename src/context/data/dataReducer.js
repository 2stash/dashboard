import {SET_STORE, IMPORT_DATA,BUILD_DASHBOARD} from '../types';

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
        importedData: payload,
        loading: false,
      };
    case BUILD_DASHBOARD:
      return {
        ...state,
        data: payload,
        loading: false,
      }
    default: 
      return {...state}
  }
}