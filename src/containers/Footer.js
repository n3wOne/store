import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { COPYRIGHT, WEB_SITE } from "../Constants";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {COPYRIGHT}
      <Link color="inherit" href="https://material-ui.com/">
        {WEB_SITE}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export const Footer = () => <Copyright />;
