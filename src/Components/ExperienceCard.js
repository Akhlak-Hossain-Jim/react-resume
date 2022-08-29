import React from "react";
import styled from "styled-components";
import { BsBuilding, BsLink45Deg } from "react-icons/bs";

export default function ExperienceCard({ experience }) {
  return (
    <Container>
      <div className="experienceCard_header">
        {experience.logo &&
        experience.logo !== null &&
        experience.logo !== undefined &&
        experience.logo !== "" &&
        typeof experience.logo === "string" ? (
          <div className="experienceCard_header__logo">
            <img src={experience.logo} alt={experience.name} />
          </div>
        ) : (
          <div className="experienceCard_header__logo">
            <BsBuilding />
          </div>
        )}
        <div className="experienceCard_header__info">
          <div className="experienceCard_header__info_nameTime">
            {experience.name && (
              <h3 className="experienceCard_header__info_nameTime__name">
                {experience.name}
              </h3>
            )}
            {(experience.location || experience.timePeriod) && (
              <div className="experienceCard_header__info_nameTime__time">
                {experience.location}.{experience.timePeriod}
              </div>
            )}
          </div>
          {experience.designation && (
            <div className="experienceCard_header__info_position">
              {experience.designation}
            </div>
          )}
        </div>
      </div>
      <div className="experienceCard_body">
        {experience.description &&
          Array.isArray(experience.description) &&
          experience.description.length > 0 &&
          React.Children.toArray(
            experience.description.map((data) => (
              <div className="experienceCard_body__item">• {data && data}</div>
            ))
          )}
      </div>
      <div className="experienceCard_links">
        {experience.links &&
          Array.isArray(experience.links) &&
          experience.links.length > 0 &&
          React.Children.toArray(
            experience.links.map((data) => (
              <a
                href={data.url && data.url}
                className="experienceCard_links__item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLink45Deg />
                {data.text && data.text}
              </a>
            ))
          )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 4px;
  .experienceCard {
    &_header {
      display: flex;
      align-items: center;
      gap: 8px;
      &__logo {
        width: 32px;
        font-size: 32px;
        & > img {
          width: 100%;
          height: auto;
          object-fit: fill;
          object-position: center;
        }
      }
      &__info {
        flex: 1 1 0%;
        &_nameTime {
          display: flex;
          -webkit-box-align: baseline;
          align-items: baseline;
          gap: 8px;
          &__name {
            font-size: 18px;
            line-height: 22px;
            font-weight: bold;
          }
          &__time {
            font-size: 10px;
            line-height: 18px;
          }
        }
        &_position {
          text-transform: uppercase;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 1px;
        }
      }
    }
    &_body {
      font-size: 14px;
      line-height: 18px;
    }
    &_links {
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      &__item {
        display: flex;
        gap: 4;
        align-items: center;
      }
    }
  }
`;
