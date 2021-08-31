import React from "react";
import { HomeWrapper, Header, MainWrapper, Title } from "./Home.style";
import Section from "../Section";

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Header>
        <Title>Customer Title</Title>
      </Header>
      <MainWrapper>
        <Section title={"Customers"} />
        <Section title={"Feedback"} />
      </MainWrapper>
    </HomeWrapper>
  );
};

export default Home;
