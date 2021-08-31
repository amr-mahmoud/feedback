// @ts-nocheck
import { callActions, actionType } from "./actions";
import { InitialStateType } from "../providers/initState";

const reducer = (state: InitialStateType, action: callActions) => {
  const {payload,type} = action
  switch (action.type) {

    case actionType.ADD_CUSTOMER: {
  
      return {
        ...state,

      };
    }
    default:
      return state;
  }
};

export default reducer;
