import React from "react";
import styled from "styled-components";
import Activities from "./Activities";
import Experience from "./Experience";

export default function MainData({ data }) {
  return (
    <Container>
      <Experience experiences={data.WorkExperience} />
      <Activities data={data} />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
`;
