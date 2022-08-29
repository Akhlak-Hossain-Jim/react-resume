import React from "react";
import styled from "styled-components";
import Link from "./Link";

export default function Header({ data }) {
  return (
    <Container>
      <h1>{data.name}</h1>
      <nav>
        {data.headerLinks &&
          Array.isArray(data.headerLinks) &&
          data.headerLinks.length > 0 &&
          React.Children.toArray(
            data.headerLinks.map((link) => <Link link={link} />)
          )}
        <Link
          link={{
            text: "/react-resume",
            url: "https://github.com/Akhlak-Hossain-Jim/react-resume",
            iconType: "repo",
          }}
        />
      </nav>
    </Container>
  );
}

const Container = styled.header`
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  & > h1 {
    font-size: 48px;
    line-height: 52px;
    font-weight: 500;
  }
  & > nav {
    margin-left: 32px;
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
