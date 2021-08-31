
import React,{FC,useEffect,useContext,useState} from "react";
import {SectionWrapper,SectionTitle,SectionContent,SectionHeader,AddButtton,StyledInput} from './Section.style'
import {AppContext} from '../../providers'
import {actionType} from '../../reducer/actions'

interface SectionProps {
  title: string;
}


const Section: FC<SectionProps> = (props): JSX.Element => {
  
  const [showInput,SetShowInput]=useState(false)
  const [inputValue,setInputValue]=useState("")

  const {state,dispatch}=useContext(AppContext)


  const {title}=props
  console.log(state,title)

  const addOnClickhandler:Function =()=>{
    SetShowInput(true)
  }

  const onInputEnter:Function=(e:KeyboardEvent)=>{
   if(e.key=== "Enter"&&inputValue.length>0) {
   title === "Customers" ? dispatch({type:actionType.ADD_CUSTOMER,payload:{name:inputValue}})
   :dispatch({type:actionType.ADD_FEEDBACK,payload:{feedback:inputValue}})
   SetShowInput(false)
   }
  }


  return <SectionWrapper>
    <SectionHeader>
    <SectionTitle>
      {title}
    </SectionTitle>
    <AddButtton onClick={()=>addOnClickhandler()}> Add new </AddButtton>
    </SectionHeader>
    <SectionContent>
      {showInput&&<StyledInput      
            tabIndex={0}
            onKeyDown={(e) => onInputEnter(e)} 
            value={inputValue} 
            onChange={e=>setInputValue(e.target.value)}/>}
    </SectionContent>
    </SectionWrapper>;
};

export default Section;
