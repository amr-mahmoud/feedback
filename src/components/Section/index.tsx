import React, { FC, useEffect, useContext, useState } from "react";
import {
  SectionWrapper,
  SectionTitle,
  SectionContent,
  NotifyLabel,
  SectionHeader,
  AddButtton,
  StyledInput,
  StyledListItem,
  StyledUl,
} from "./Section.style";
import { AppContext } from "../../providers";
import { actionType } from "../../reducer/actions";

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = (props): JSX.Element => {
  const [showInput, SetShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { state, dispatch } = useContext(AppContext);
  const { customers, selectedCustomer } = state;

  const { title } = props;
  console.log(state, title);

  const addOnClickhandler: Function = () => {
    SetShowInput(true);
  };

  const onInputEnter: Function = (e: KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      title === "Customers"
        ? dispatch({
            type: actionType.ADD_CUSTOMER,
            payload: { name: inputValue },
          })
        : dispatch({
            type: actionType.ADD_FEEDBACK,
            payload: { feedback: inputValue },
          });

      SetShowInput(false);
      setInputValue("");
    }
  };

  const feedbacks = customers.find(
    (customer) => customer.id === selectedCustomer
  )?.feedbacks;

  console.log("feedbacks", feedbacks);
  const customerOnlickHandler: Function = (id: string) =>
    dispatch({ type: actionType.SELECT_CUSTOMER, payload: { id } });

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <AddButtton onClick={() => addOnClickhandler()}> Add new </AddButtton>
      </SectionHeader>
      <SectionContent>
        {showInput && (
          <StyledInput
            tabIndex={0}
            onKeyDown={(e) => onInputEnter(e)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
        <StyledUl>
          {title === "Customers" ? (
            customers.length > 0 ? (
              customers.map(({ name, id }) => (
                <StyledListItem
                  key={id}
                  onClick={() => customerOnlickHandler(id)}
                >
                  <label>{name}</label>
                </StyledListItem>
              ))
            ) : (
              <NotifyLabel>{`No ${title}`}</NotifyLabel>
            )
          ) : feedbacks && feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <StyledListItem key={feedback}>
                <label>{feedback}</label>
              </StyledListItem>
            ))
          ) : (
            <NotifyLabel>{`No ${title}`}</NotifyLabel>
          )}
        </StyledUl>
      </SectionContent>
    </SectionWrapper>
  );
};

export default Section;
