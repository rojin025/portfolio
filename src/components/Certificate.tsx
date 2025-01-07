import "../assets/styles/Certificate.scss";

import git from "../assets/images/CertificateOfCompletion_LearningGitAndGitHub.png";
import dataAndAlgo from "../assets/images/CertificateOfCompletion_JavaScript Algorithms and Data Structures.jpg";
import react from "../assets/images/CertificateOfCompletion_React, Next.js&Redux.jpg";

import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "JavaScript Algorithms and Data Structures Masterclass",
    company: "Udemy",
    issued: "Issued Jan 2025",
    certificateId: "UC-ee59a134-98a4-481c-bfad-d5565c41b23c",
    skills: ["Data Structures", "Algorithms"],
    image: dataAndAlgo,
  },

  {
    title: "React, Next.js and Reducx Course",
    company: "Udemy",
    issued: "Issued Jan 2025",
    certificateId: "UC-440e3615-048f-43d9-a9d5-6a196081da76",
    skills: ["React.js", "Next.js", "Redux", "React Querry ", "Tailwind CSS"],
    image: react,
  },
  {
    title: "Git and GitHub",
    company: "LinkedIn Learning",
    issued: "Issued Feb 2018",
    certificateId:
      "d6d9c858b4e8a9f009410856633972de8fb9afe10e1d86984bfa0f3c5e6f77d0",
    skills: ["Git", "GitHub"],
    image: git,
  },
];

function Certificate() {
  return (
    <div className="certificates-container" id="certificates">
      <h1>Certificates</h1>
      <div className="certificates-grid">
        <div className="certificates">
          <div>
            {certificates.map((c) => (
              <CertificateCard key={c.certificateId} item={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
