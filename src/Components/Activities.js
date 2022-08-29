import React from "react";
import styled from "styled-components";
import Club from "./Club";
import Education from "./Education";

export default function Activities({ data }) {
  return (
    <Container>
      <h2>Education</h2>
      <>
        {data.Educations &&
          Array.isArray(data.Educations) &&
          data.Educations.length > 0 &&
          React.Children.toArray(
            data.Educations.map((education) => (
              <Education education={education} />
            ))
          )}
      </>
      <h2 className="second">Achievements</h2>
      <>
        {data.Achievements &&
          Array.isArray(data.Achievements) &&
          data.Achievements.length > 0 &&
          React.Children.toArray(
            data.Achievements.map((achievement) => (
              <Achievement>
                <strong>
                  {achievement.url ? (
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {achievement.title}
                    </a>
                  ) : (
                    achievement.title
                  )}
                </strong>{" "}
                {achievement.date & achievement.date}
              </Achievement>
            ))
          )}
      </>
      <h2 className="second">Skillset</h2>
      <>
        {data.Skills &&
          Array.isArray(data.Skills) &&
          data.Skills.length > 0 &&
          React.Children.toArray(
            data.Skills.map((data) => (
              <Skills>
                <h4>{data.title}</h4>
                <p>{data.skillSet && data.skillSet}</p>
              </Skills>
            ))
          )}
      </>
      <h2 className="second">Club</h2>
      <>
        {data.ClubActivity &&
          Array.isArray(data.ClubActivity) &&
          data.ClubActivity.length > 0 &&
          React.Children.toArray(
            data.ClubActivity.map((club) => <Club club={club} />)
          )}
      </>
    </Container>
  );
}

const Skills = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
  & > h4 {
    padding-top: 4px;
    font-weight: bold;
  }
  & > p {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Achievement = styled.article`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 14px;
  line-height: 22px;
`;

const Container = styled.div`
  margin-left: 16px;
  width: 275px;
`;
