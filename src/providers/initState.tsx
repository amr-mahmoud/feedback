export type CustomerType = {
  id: string;
  name: string;
  feedbacks: string[];
};

export type InitialStateType = {
  customers: CustomerType[];
  selectedCustomer: string;
};

export const initState: InitialStateType = {
  customers: [],
  selectedCustomer: "",
};
