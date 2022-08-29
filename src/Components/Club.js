import React from "react";
import styled from "styled-components";

export default function Club({ club }) {
  return (
    <Container>
      <div className="club_info">
        <h4>
          {club.url ? (
            <a href={club.url} target="_blank" rel="noopener noreferrer">
              {club.name}
            </a>
          ) : (
            club.name
          )}
        </h4>
        {club.period}
      </div>
      <div className="club_work">{club.work && club.work}</div>
    </Container>
  );
}
const Container = styled.article`
  .club {
    &_info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 4px;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 1px;
      & > h4 {
        line-height: 22px;
        letter-spacing: normal;
      }
    }
    &_work {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;
