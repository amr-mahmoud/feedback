import React from "react";
import { HomeWrapper, Header, MainWrapper } from "./Home.style";
import Section from "../Section";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Header />
      <MainWrapper>
        <Section />
        <Section />
      </MainWrapper>
    </HomeWrapper>
  );
};

export default Home;
