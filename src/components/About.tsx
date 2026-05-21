import { usePortfolio } from "../context/LocaleContext";
import "./styles/About.css";

const About = () => {
  const { content } = usePortfolio();

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{content.about.title}</h3>
        <p className="para">{content.about.body}</p>
      </div>
    </div>
  );
};

export default About;
