import styled from "styled-components";

interface itemProps {
   selected: boolean;
   selectable:boolean;
}


export const SectionWrapper = styled.div`
flex:1;
display:flex;
flex-direction:column;
height: 100%;
overflow: hidden;
overflow-y: scroll;
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: row;
  padding: 0 20px;
  justify-content: space-between;
`;

export const AddButtton = styled.button`
  height: 25px;
  margin: auto 0;
`;
export const StyledInput = styled.input`
  font-size: 13px;
  height: 30px;
  width: 98%;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid black;
  padding: 0 4px;
`;

export const SectionContent = styled.div`
  display:flex;  
  flex: 1;
  border: 1px solid black;
  flex-direction: column;

`;

export const SectionTitle = styled.h3`
  margin: 10px 0;
`;

export const StyledListItem = styled.li<itemProps>`
  font-size: 13px;
  display: flex;
  height: 30px;
  border-bottom: 1px solid black;
  label {
    margin: auto 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 2;
  }
  cursor: ${(props) => (props.selectable &&"pointer")};
  background: ${(props) => (props.selected ?"#32ef32":"#fffffff")};
  &:hover {
    background:${(props) => (!props.selected &&props.selectable &&"yellow")};
  }

`;

export const StyledUl = styled.ul`
  list-style-type: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  flex: 1;
  display:flex;
  flex-direction:column;

`;

export const NotifyLabel = styled.label`
  margin: auto;
  font-weight:bold;
`;
