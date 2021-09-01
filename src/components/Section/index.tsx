import {
  FC,
  useRef,
  useContext,
  useState,
  useEffect,
  useCallback,
  createElement,
  ReactElement,
} from "react";
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
  SearchInput,
} from "./Section.style";
import { AppContext } from "../../providers";
import { actionType } from "../../reducer/actions";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

interface SectionProps {
  title: string;
}

const Section: FC<SectionProps> = (props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [showInput, SetShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { state, dispatch } = useContext(AppContext);
  const { customers, selectedCustomer } = state;
  const { title } = props;

  const closeInput: Function = () => {
    SetShowInput(false);
    setInputValue("");
  };

  useOutsideAlerter(inputRef, closeInput, `input${title}`);

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  }, [showInput]);

  const addOnClickhandler: Function = () => {
    SetShowInput(true);
  };

  const onInputEnter: Function = (e: KeyboardEvent) => {
    if (e.key === "Escape" || e.key === "Enter") {
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
      closeInput();
    }
  };

  const customersCount = useCallback(() => {
    return (
      customers.find((customer) => customer.id === selectedCustomer)
        ?.feedbacks || []
    );
  }, [customers, selectedCustomer]);

  const calculateFeedback = useCallback(() => {
    return (
      customers
        .find((customer) => customer.id === selectedCustomer)
        ?.feedbacks.filter((val) => val.includes(searchValue)) || []
    );
  }, [customers, selectedCustomer, searchValue]);

  const customerOnlickHandler: Function = (id: string) =>
    dispatch({ type: actionType.SELECT_CUSTOMER, payload: { id } });

  const computeText = useCallback(
    (feedtext: string) => {
      if (feedtext === "") return feedtext;
      const separator = `,><,`;
      let newfeedText = feedtext.replaceAll(
        searchValue,
        `${separator}${searchValue}${separator}`
      );
      let spanArray = newfeedText
        .split(separator)
        .reduce((acc: ReactElement[], subs: string) => {
          return searchValue === subs
            ? [
                ...acc,
                createElement("span", { className: "highlighted" }, subs),
              ]
            : [...acc, createElement("span", null, subs)];
        }, []);

      const container = createElement("div", { className: "search-div" }, [
        ...spanArray,
      ]);
      return container;
    },
    [searchValue]
  );

  return (
    <SectionWrapper>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {title === "Feedback" &&
          customersCount() &&
          customersCount().length > 0 && (
            <SearchInput
              tabIndex={1}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          )}
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
          ) : calculateFeedback().length > 0 ? (
            calculateFeedback().map((feedback, index) => (
              <StyledListItem
                key={feedback}
                selected={false}
                selectable={false}
              >
                {computeText(feedback)}
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
