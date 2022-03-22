import React, { createContext, useContext, useReducer } from "react";

// Perpares the data layer
export const StateContext = createContext();

// wrap our app provided the data layer to compounent.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer.
export const useStateValue = () => useContext(StateContext);
