import React from "react";
import styled from "styled-components";

export default function ProjectBox({ project }) {
  return (
    <Container>
      <div className="project_line1">
        <h3>
          {project.url ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          ) : (
            project.title
          )}
          <span>{project.using && project.using}</span>
        </h3>
        <p>{project.date && project.date}</p>
      </div>
      {project.details &&
        Array.isArray(project.details) &&
        project.details.length > 0 &&
        React.Children.toArray(
          project.details.map((data) => (
            <div className="project_details">• {data}</div>
          ))
        )}
    </Container>
  );
}

const Container = styled.article`
  .project {
    &_line1 {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 4px;
      gap: 8px;
      & > h3 {
        display: flex;
        align-items: baseline;
        gap: 8px;
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        & > span {
          font-size: 12px;
          line-height: 18px;
        }
      }
      & > p {
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 1px;
      }
    }
    &_details {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;
