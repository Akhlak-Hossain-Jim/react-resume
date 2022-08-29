import React, { useEffect } from "react";
import styled from "styled-components";
import Head from "./Components/Head";
import Header from "./Components/Header";
import MainData from "./Components/MainData";
import Projects from "./Components/Projects";
import DATA from "./data/data";

export default function App() {
  useEffect(() => {
    document.body.style.background = DATA.background
      ? DATA.background
      : "#e0e0e0";
  }, []);

  return (
    <>
      <Head data={DATA} />
      <Container
        pageColor={DATA.pageColor && DATA.pageColor}
        color={DATA.textColor && DATA.textColor}
        linkColor={DATA.linkColor && DATA.linkColor}
      >
        <Header data={DATA} />
        <div className="body">
          <MainData data={DATA} />
          <Projects projects={DATA.Projects} />
        </div>
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 216mm;
  height: 279mm;
  margin: 5mm auto;
  padding: 32px;
  overflow: hidden;
  position: relative;
  page-break-after: always;
  background-color: ${({ pageColor }) => (pageColor ? pageColor : "white")};
  box-shadow: 0 0.5mm 2mm rgb(0 0 0 / 30%);
  color: ${({ color }) => (color ? color : "#000")};
  a {
    color: ${({ linkColor }) => (linkColor ? linkColor : "#000")};
  }
`;
