import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePortfolio } from "../context/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const { content } = usePortfolio();
  const { work } = content;

  useEffect(() => {
    let translateX = 0;
    let timeline: gsap.core.Timeline | null = null;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline?.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, [work.projects.length]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          {work.title} <span>{work.titleHighlight}</span>
        </h2>
        <div className="work-flex">
          {work.projects.map((project, index) => (
            <div className="work-box" key={project.href}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Stack</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image ?? "/images/placeholder.webp"}
                alt={project.name}
                link={project.href}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
