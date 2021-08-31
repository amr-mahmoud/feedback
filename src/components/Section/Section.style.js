import styled from "styled-components";

export const SectionWrapper = styled.div`
flex:1;
display:flex;
flex-direction:column;s

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
  width: 99%;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid black;
  padding: 0 4px;
`;

export const SectionContent = styled.div`
  flex: 1;
  border: 1px solid black;
  flex-direction: column;
`;

export const SectionTitle = styled.h3`
  margin: 10px 0;
`;

export const StyledListItem = styled.li`
  font-size: 13px;
  display: flex;
  height: 30px;
  border-bottom: 1px solid black;
  label {
    margin: auto 5px;
  }
  cursor: pointer;
  &:hover {
    background: yellow;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

export const NotifyLabel = styled.label`
  margin: auto;
`;
