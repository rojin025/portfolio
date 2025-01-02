import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";

import protfolio from "../assets/images/Portfolio.webp";
import rental from "../assets/images/Rental.gif";

import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <div>
            <a
              href="https://react-side-project-rentals.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rental} className="zoom" alt="thumbnail" width="100%" />
            </a>
          </div>
          <div>
            <a
              href="https://react-side-project-rentals.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <h2>Rental Web App</h2>
            </a>
            <p>
              The AirBnB is a house rental platform built with Next.js,
              Supabase, and REST APIs, offering a seamless experience for
              renters and landlords. Users can easily browse detailed property
              listings, apply filters, and securely manage bookings. Whether
              you're searching for a cozy apartment or listing a home, our
              platform simplifies the entire process.
            </p>
          </div>
        </div>
        <div className="project">
          <div>
            <a
              href="https://www.byuh.edu/covid-19-case-management"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={protfolio}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
          </div>

          <div>
            <a
              href="https://www.byuh.edu/covid-19-case-management"
              target="_blank"
              rel="noreferrer"
            >
              <h2>COVID-19 Case Management</h2>
            </a>
            <p>
              Built official charts for COVID/vaccination tracking for an
              educational institution using JavaScript and the Google Sheets API
              v4. The dashboard served the university's leadership in their
              decision-making processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
