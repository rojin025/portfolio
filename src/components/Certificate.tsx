import "../assets/styles/Certificate.scss";

import git from "../assets/images/CertificateOfCompletion_LearningGitAndGitHub.png";
import rental from "../assets/images/Rental.gif";
import { Javascript } from "@mui/icons-material";

const certificates = [
  {
    title: "JavaScript Algorithms and Data Structures Masterclass",
    company: "Udemy",
    issued: "Issued Jan 2025",
    certificateId:
      "UC-ee59a134-98a4-481c-bfad-d5565c41b23cCredential ID UC-ee59a134-98a4-481c-bfad-d5565c41b23c",
    skills: ["React.js", "Next.js", "Redux", "React Querry ", "Tailwind CSS"],
  },
  {
    title: "Git and GitHub",
    company: "LinkedIn Learning",
    issued: "Issued Feb 2018",
    certificateId:
      "ID d6d9c858b4e8a9f009410856633972de8fb9afe10e1d86984bfa0f3c5e6f77d0",
    skills: ["Git", "GitHub"],
  },
];

function Certificate() {
  return (
    <div className="certificates-container" id="certificates">
      <h1>Certificate & Education</h1>
      <div className="certificates-grid">
        <div className="certificates">
          <div className="certificate">
            <div>
              <img src={git} className="zoom" alt="thumbnail" width="100%" />
            </div>

            <div>
              <h2>Git and GitHub</h2>
              <h4>LinkedIn Learning</h4>
              <p>Issued Feb 2018</p>
              <p>
                ID
                d6d9c858b4e8a9f009410856633972de8fb9afe10e1d86984bfa0f3c5e6f77d0
              </p>
              <p>Skills: Git , GitHub</p>
            </div>
          </div>

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

type CertificateCardProps = {
  item: {
    title: string;
    company: string;
    issued: string;
    certificateId: string;
    skills: string[];
  };
};

function CertificateCard({
  item: { title, company, issued, certificateId, skills },
}: CertificateCardProps) {
  return (
    <div className="certificate">
      <div>
        <img src={git} className="zoom" alt="thumbnail" width="100%" />
      </div>

      <div>
        <h2>Git and GitHub</h2>
        <h4>LinkedIn Learning</h4>
        <p>Issued Feb 2018</p>
        <p>
          ID d6d9c858b4e8a9f009410856633972de8fb9afe10e1d86984bfa0f3c5e6f77d0
        </p>
        <p>Skills: Git , GitHub</p>
      </div>
    </div>
  );
}

export default Certificate;
