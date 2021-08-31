import React, { useReducer, createContext, Dispatch } from "react";
import reducer from "../reducer";
import { initState, InitialStateType } from "./initState";
import { callActions } from "../reducer/actions";

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<callActions>;
}>({
  state: initState,
  dispatch: () => null,
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
