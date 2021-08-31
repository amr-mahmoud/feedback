export enum actionType {
  ADD_FEEDBACK = "ADD_FEEDBACK",
  ADD_CUSTOMER = "ADD_CUSTOMER",

}

export interface addcutsomer {
  type: actionType.ADD_CUSTOMER;
  payload: { name:string };
}

export interface addfeedback {
  type: actionType.ADD_FEEDBACK;
  payload: { id: string; feedback: string };
}



export type callActions =
  | addcutsomer
  | addfeedback

