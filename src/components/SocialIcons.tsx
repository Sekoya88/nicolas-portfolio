import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { TbDownload } from "react-icons/tb";
import "./styles/SocialIcons.css";
import { useEffect } from "react";
import { usePortfolio } from "../context/LocaleContext";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const { content } = usePortfolio();
  const { cv } = content;
  const github = content.contact.social.find((s) => s.id === "github");
  const linkedin = content.contact.social.find((s) => s.id === "linkedin");

  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        {github && (
          <span>
            <a href={github.url} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </span>
        )}
        {linkedin && (
          <span>
            <a href={linkedin.url} target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
        )}
      </div>
      <a
        className="resume-button"
        href={cv.href}
        download={cv.fileName}
        data-cursor="disable"
      >
        <HoverLinks text={cv.label.toUpperCase()} />
        <span>
          <TbDownload />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
