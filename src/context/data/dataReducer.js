import {SET_STORE} from '../types';

export default(state, action) => {
  const {type, payload} = action;
  switch(type){
    case SET_STORE:
      return {
        ...state,
        data: payload,
        loading: false
      }
    default: 
      return {...state}
  }
}