import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { usePortfolio } from "../context/LocaleContext";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const { content } = usePortfolio();
  const { nav } = content;

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const target = e.currentTarget as HTMLAnchorElement;
          const section = target.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });

    // Active section highlighting
    const sectionIds = ["#about", "#work", "#contact"];
    sectionIds.forEach((id) => {
      const el = document.querySelector(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => setActiveLink(id),
        onEnterBack: () => setActiveLink(id),
        onLeave: () => clearActiveLink(id),
        onLeaveBack: () => clearActiveLink(id),
      });
    });

    function setActiveLink(id: string) {
      links.forEach((link) => {
        const href = (link as HTMLAnchorElement).getAttribute("data-href");
        if (href === id) link.classList.add("nav-active");
        else link.classList.remove("nav-active");
      });
    }
    function clearActiveLink(id: string) {
      links.forEach((link) => {
        const href = (link as HTMLAnchorElement).getAttribute("data-href");
        if (href === id) link.classList.remove("nav-active");
      });
    }

    const onResize = () => ScrollSmoother.refresh(true);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          {nav.logo}
        </a>
        <a
          href={`mailto:${nav.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {nav.email}
        </a>
        <ul>
          {nav.sections.map((section) => (
            <li key={section.id}>
              <a data-href={section.id} href={section.id}>
                <HoverLinks text={section.label} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
