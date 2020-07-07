import React from "react";
import { COPYRIGHT, COMPANY_NAME, WEB_SITE_LINK } from "../Constants";

function Copyright() {
  return (
    <p>
      {COPYRIGHT}
      <a href={WEB_SITE_LINK} target="_blank" rel="noopener noreferrer">
        {COMPANY_NAME}
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
}

export const Footer = () => <Copyright />;
