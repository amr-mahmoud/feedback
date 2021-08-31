export enum actionType {
  ADD_FEEDBACK = "ADD_FEEDBACK",
  ADD_CUSTOMER = "ADD_CUSTOMER",
  SELECT_CUSTOMER = "SELECT_CUSTOMER",
}

export interface addcutsomer {
  type: actionType.ADD_CUSTOMER;
  payload: { name: string };
}

export interface addfeedback {
  type: actionType.ADD_FEEDBACK;
  payload: { feedback: string };
}

export interface selectCustomer {
  type: actionType.SELECT_CUSTOMER;
  payload: { id: string };
}

export type actions = addcutsomer | addfeedback | selectCustomer;
