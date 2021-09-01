import  { FC, useRef, useContext, useState, useEffect } from "react";
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
import useOutsideAlerter from "../../hooks/useOutsideAlerter"


interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = (props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [showInput, SetShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { state, dispatch } = useContext(AppContext);
  const { customers, selectedCustomer } = state;
  const { title } = props;
  
  const closeInput:Function =() => {
    SetShowInput(false);
    setInputValue("");
  }

  useOutsideAlerter(inputRef, closeInput, `input${title}`);


  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  }, [showInput]);

  const addOnClickhandler: Function = () => {
    SetShowInput(true);
  };

  const onInputEnter: Function = (e: KeyboardEvent) => {
    if( e.key === "Escape" || e.key === "Enter" ){
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
      }
      closeInput()
    }
  };

  const feedbacks = customers.find(
    (customer) => customer.id === selectedCustomer
  )?.feedbacks;

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
            id={`input${title}`}
            ref={inputRef}
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
                  selected={id === selectedCustomer}
                  selectable={true}
                >
                  <label>{name}</label>
                </StyledListItem>
              ))
            ) : (
              <NotifyLabel>{`No ${title}`}</NotifyLabel>
            )
          ) : feedbacks && feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <StyledListItem
                key={feedback}
                selected={false}
                selectable={false}
              >
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
