import React from "react";
import styled from "styled-components";

export default function Education({ education }) {
  return (
    <Container>
      <h3>{education.degreeEarned && education.degreeEarned}</h3>
      <p className="education_Details">
        {education.institute && education.institute},
        {education.graduationDate && education.graduationDate}
      </p>
      {education.details && (
        <div className="education_Details">{education.details}</div>
      )}
      {education.results &&
        Array.isArray(education.results) &&
        education.results.length > 0 &&
        React.Children.toArray(
          education.results.map((data) => (
            <div className="education_grade">
              <div className="education_grade__title">
                {data.title && data.title}
              </div>
              <div className="education_grade__grade">
                {data.grade && data.grade}
              </div>
            </div>
          ))
        )}
    </Container>
  );
}

const Container = styled.div`
  padding-top: 4px;
  .education {
    &_Details {
      font-size: 12px;
      line-height: 18px;
      &:nth-child(2) {
        padding: 4px 0;
      }
    }
    &_grade {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 14px;
      line-height: 18px;
      &__title {
        font-weight: bold;
      }
    }
  }
`;
