import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faJava,
  faNodeJs,
  faSquareJs,
  faGit,
  faGitAlt,
  faGithub,
  faAngular,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const frontend = [
  "React",
  "TypeScript",
  "JavaScript",
  "React Native",
  "HTML5",
  "CSS3",
  "SASS",
  "Tailwind",
  "Bootstrap",
  "ShadCn/ui",
];
const backend = [
  "NodeJS",
  "NextJS",
  "Java",
  "SQL",
  "MongoDB",
  "Express",
  "Postman",
  "Git",
  "GitHub Actions",
  "CI/CD",
  //   "Docker",
  //   "AWS",
];

const ai = ["OpenAI", "Claude", "Python"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <FontAwesomeIcon icon={faSquareJs} size="3x" />

            <FontAwesomeIcon icon={faAngular} size="3x" />
            <h3>Frontend</h3>
            <p>
              I have implemented dynamic and responsive web applications by
              designing and optimizing user interfaces, ensuring seamless
              navigation and accessibility. My work involves transforming
              complex requirements into intuitive front-end solutions while
              maintaining clean and maintainable code.
            </p>
            <div className="flex-chips">
              <div className="chip-title">Tech stack:</div>
              {frontend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
            <FontAwesomeIcon icon={faJava} size="3x" />
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <FontAwesomeIcon icon={faGithub} size="3x" />

            <h3>Backend & Automation</h3>
            <p>
              I have developed robust backend solutions by designing and
              implementing APIs, managing databases, and optimizing server-side
              performance. My work includes ensuring secure and efficient data
              handling, setting up automated testing workflows, and streamlining
              deployment processes to support seamless application delivery.
            </p>
            <div className="flex-chips">
              <div className="chip-title">Tech stack:</div>
              {backend.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              I stay at the forefront of innovation by integrating the latest AI
              models into projects to deliver intelligent and adaptive
              solutions. My experience includes building enterprise-grade
              GenAI-enabled systems that enhance decision-making and drive
              efficiency.
            </p>
            <div className="flex-chips">
              <div className="chip-title">Tech stack:</div>
              {ai.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
