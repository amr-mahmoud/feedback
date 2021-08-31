import React,{FC,useEffect,useContext} from "react";
import {SectionWrapper,SectionTitle,SectionContent,SectionHeader,AddButtton} from './Section.style'
import {AppContext} from '../../providers'

interface SectionProps {
  title: string;
}


const Section: FC<SectionProps> = (props): JSX.Element => {
  
  const {state,dispatch}=useContext(AppContext)
  const {title}=props


  return <SectionWrapper>
    <SectionHeader>
    <SectionTitle>
      {title}
    </SectionTitle>
    <AddButtton> Add new </AddButtton>
    </SectionHeader>
    <SectionContent></SectionContent>
    </SectionWrapper>;
};

export default Section;
