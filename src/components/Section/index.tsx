import React,{FC} from "react";
import {SectionWrapper,SectionTitle,SectionContent,SectionHeader,AddButtton} from './Section.style'


interface SectionProps {
  title: string;
}


const Section: FC<SectionProps> = (props): JSX.Element => {
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
