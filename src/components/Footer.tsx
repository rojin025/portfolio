import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://www.linkedin.com/in/rojinbijukchhe/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/rojin025" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <p>Thank you Yuji Sato</p>
      </div>
    </footer>
  );
}

export default Footer;
