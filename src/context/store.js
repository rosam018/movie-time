/**
 * Taken from https://itnext.io/replace-redux-state-with-react-hooks-and-context-7906e0fd5521 
 */

import React, { createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";


const StoreContext = createContext(initialState);


const StoreProvider = ({ children, appState }) => {
  const mergedState = { 
    ...initialState,
    ...appState
  }
  // Set up reducer with useReducer and our defined reducer, initialState from reducers.js
  const [state, dispatch] = useReducer(reducer, mergedState);
  // Create an object of all our actions, handling special cases where a simple dispatch is too primitive
  const actions = useActions(state, dispatch);

  
  // Log new state
  useEffect(
    () => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('New State:' , { newState: state });
      }
    },
    [state]
  );

  // Render state, dispatch and special case actions
  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
