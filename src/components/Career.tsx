import { usePortfolio } from "../context/LocaleContext";
import type { Job } from "../data/portfolio.types";
import "./styles/Career.css";

const CareerList = ({ jobs }: { jobs: Job[] }) => (
  <div className="career-info">
    <div className="career-timeline">
      <div className="career-dot" />
    </div>
    {jobs.map((job) => (
      <div className="career-info-box" key={`${job.company}-${job.period}`}>
        <div className="career-info-in">
          <div className="career-role">
            <h4>{job.role}</h4>
            <h5>{job.company}</h5>
          </div>
          <h3>{job.period}</h3>
        </div>
        {job.description ? <p>{job.description}</p> : null}
      </div>
    ))}
  </div>
);

const Career = () => {
  const { content } = usePortfolio();
  const { career } = content;

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          {career.title} <span>{career.titleSpan}</span>
          <br /> {career.titleBreak}
        </h2>

        <h3 className="career-subtitle">{career.experienceTitle}</h3>
        <CareerList jobs={career.experience} />

        <h3 className="career-subtitle career-subtitle--education">
          {career.educationTitle}
        </h3>
        <CareerList jobs={career.education} />
      </div>
    </div>
  );
};

export default Career;
