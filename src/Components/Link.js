import React from "react";
import styled from "styled-components";
import { BiGitRepoForked } from "react-icons/bi";
import { BsFillTelephoneFill, BsLinkedin } from "react-icons/bs";
import { GoGlobe, GoMail, GoMarkGithub } from "react-icons/go";

export default function Link({ link }) {
  return (
    <Container
      href={link.url && link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        {link.iconType ? (
          link.iconType === "web" ? (
            <GoGlobe />
          ) : link.iconType === "call" ? (
            <BsFillTelephoneFill />
          ) : link.iconType === "mail" ? (
            <GoMail />
          ) : link.iconType === "github" ? (
            <GoMarkGithub />
          ) : link.iconType === "linkedin" ? (
            <BsLinkedin />
          ) : link.iconType === "repo" ? (
            <BiGitRepoForked />
          ) : (
            <GoGlobe />
          )
        ) : (
          <GoGlobe />
        )}
      </span>
      {link.text}
    </Container>
  );
}

const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 18px;
  & > span {
    font-size: 11px;
    line-height: 100%;
  }
`;
