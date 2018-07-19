import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  VacationData: []
};

const reducer = (state=initialState, action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return {
      ...state,
      VacationData: action.VacationData
    };
  } 

  return state;
};

export default createStore(reducer, applyMiddleware(thunk));
