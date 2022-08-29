import React from "react";
import { Helmet } from "react-helmet";
export default function Head({ data }) {
  return (
    <Helmet>
      <title>Resume - {data.name} by ahjim</title>
      {data.about && <meta name="description" content={data.about} />}
    </Helmet>
  );
}
