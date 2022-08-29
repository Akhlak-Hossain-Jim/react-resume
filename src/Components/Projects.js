import React from "react";
import styled from "styled-components";
import ProjectBox from "./ProjectBox";

export default function Projects({ projects }) {
  return (
    <Container>
      <h2>Projects</h2>
      {projects &&
        Array.isArray(projects) &&
        projects.length > 0 &&
        React.Children.toArray(
          projects.map((data) => <ProjectBox project={data} />)
        )}
    </Container>
  );
}

const Container = styled.section`
  padding-top: 16px;
`;
