import React from "react";
import styled from "styled-components";
import ExperienceCard from "./ExperienceCard";

export default function Experience({ experiences }) {
  return (
    <Container>
      <h2>Work Experience</h2>
      {React.Children.toArray(
        experiences.map((data) => <ExperienceCard experience={data} />)
      )}
    </Container>
  );
}

const Container = styled.section`
  flex: 1 1 0%;
`;
