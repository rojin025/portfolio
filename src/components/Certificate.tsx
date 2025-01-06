import "../assets/styles/Certificate.scss";

import git from "../assets/images/CertificateOfCompletion_LearningGitAndGitHub.png";
import rental from "../assets/images/mock04.png";
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "JavaScript Algorithms and Data Structures Masterclass",
    company: "Udemy",
    issued: "Issued Jan 2025",
    certificateId:
      "UC-ee59a134-98a4-481c-bfad-d5565c41b23cCredential ID UC-ee59a134-98a4-481c-bfad-d5565c41b23c",
    skills: ["React.js", "Next.js", "Redux", "React Querry ", "Tailwind CSS"],
    image: git,
  },
  {
    title: "Git and GitHub",
    company: "LinkedIn Learning",
    issued: "Issued Feb 2018",
    certificateId:
      "ID d6d9c858b4e8a9f009410856633972de8fb9afe10e1d86984bfa0f3c5e6f77d0",
    skills: ["Git", "GitHub"],
    image: rental,
  },
];

function Certificate() {
  return (
    <div className="certificates-container" id="certificates">
      <h1>Certificate & Education</h1>
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
