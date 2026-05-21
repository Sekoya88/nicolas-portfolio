import { usePortfolio } from "../context/LocaleContext";
import "./styles/Career.css";

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
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {career.jobs.map((job) => (
            <div className="career-info-box" key={`${job.company}-${job.period}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>{job.company}</h5>
                </div>
                <h3>{job.period}</h3>
              </div>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
