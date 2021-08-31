import shortid from "shortid";
import { actions, actionType } from "./actions";
import { InitialStateType } from "../providers/initState";

const reducer = (state: InitialStateType, action: actions) => {

  const {customers,selectedCustomer}=state
  switch (action.type) {

    case actionType.ADD_CUSTOMER: {
      
      const {name}=action.payload
      const newCustomers=[{id:shortid.generate(),name:name,feedbacks:[]},...customers]

      return {
        ...state,
        customers:newCustomers
      };
    }

    case actionType.ADD_FEEDBACK: {
      
      const {feedback} = action.payload

      const newCustomers=[...customers].map(customer=>{
        const {id:customerId,feedbacks,name}=customer
        return selectedCustomer === customer.id ? { id:customerId,name,feedbacks:[feedback,...feedbacks]}
       : customer
      })
       
      return {
        ...state,
        customers:newCustomers
      };
    }


    case actionType.SELECT_CUSTOMER: {
    
      const {id} = action.payload
       
      return {
        ...state,
        selectedCustomer:id
      };
    }
    default:
      return state;
  }
};

export default reducer;
