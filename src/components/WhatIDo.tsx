import { useEffect, useRef } from "react";
import { usePortfolio } from "../context/LocaleContext";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const { content } = usePortfolio();
  const { whatIDo } = content;
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const handler = () => handleClick(container);
          container.addEventListener("click", handler);
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.replaceWith(container.cloneNode(true));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          {whatIDo.titleLine1.first}
          <span className="hat-h2">{whatIDo.titleLine1.rest}</span>
          <div>
            {whatIDo.titleLine2.first}
            <span className="do-h2">{whatIDo.titleLine2.rest}</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          {whatIDo.pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  {index === 0 && (
                    <line
                      x1="0"
                      y1="100%"
                      x2="100%"
                      y2="100%"
                      stroke="white"
                      strokeWidth="2"
                      strokeDasharray="6,6"
                    />
                  )}
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{pillar.title}</h3>
                <h4>{pillar.descriptionLabel}</h4>
                <p>{pillar.description}</p>
                <h5>{pillar.skillsLabel}</h5>
                <div className="what-content-flex">
                  {pillar.skills.map((skill) => (
                    <div className="what-tags" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
