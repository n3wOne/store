import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { COPYRIGHT, COMPANY_NAME, WEB_SITE_LINK } from "../Constants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {COPYRIGHT}
      <Link color="inherit" href={WEB_SITE_LINK} target="_blank">
        {COMPANY_NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => <Copyright />;
