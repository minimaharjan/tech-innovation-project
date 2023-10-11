// import React, { createContext, useReducer, Children } from "react";

// // App
// import { AppState, initialAppState } from "./states/appState";
// import { AppActions } from "./actions/appActions";
// import appReducer from "./reducers/appReducer";

// export const AppContext = createContext
// <{
//     appState: AppState;
//     appDispatch: React.Dispatch<AppActions>;
//   }>
//   ({
//     appState: initialAppState,
//     appDispatch: () => undefined,
//   });

// export const AppProvider = (props) => {
//     const [appState, appDispatch] = useReducer(appReducer, initialAppState);
   
//     const contexts = {
//       appState,
//       appDispatch,
      
//     };
//     return (
//       <AppContext.Provider value={contexts}>{props.children}</AppContext.Provider>
//     );
//   };

import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

// Prepares the dataLayer
export const AppContext = createContext();

// // Wrap our app and provide the Data layer
// export const AppProvider = ({ reducer, initialState, children }) => (
//   // const [state, dispatch] = useReducer(appReducer, initialState);
//   <AppContext.Provider value={useReducer(reducer, initialState)}>
//     {children}
//   </AppContext.Provider>
// );
// Create a provider component
export const AppProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Pull information from the data layer
// export const useStateValue = () => useContext(StateContext);
export const useAppContext = () => {
  return useContext(AppContext);
};