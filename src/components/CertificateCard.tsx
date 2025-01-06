import Chip from "@mui/material/Chip";

type CertificateCardProps = {
  item: {
    title: string;
    company: string;
    issued: string;
    certificateId: string;
    skills: string[];
    image: string;
  };
};

function CertificateCard({
  item: { title, company, issued, certificateId, skills, image },
}: CertificateCardProps) {
  return (
    <div className="certificate">
      <div>
        <img src={image} className="zoom" alt="thumbnail" width="100%" />
      </div>

      <div>
        <h2>{title}</h2>
        <h4>{company}</h4>
        <p>{issued}</p>
        <p>{certificateId}</p>
        Skills:
        <>
          {skills.map((s) => (
            <Chip key={s} className="chip" label={s} />
          ))}
        </>
      </div>
    </div>
  );
}

export default CertificateCard;
