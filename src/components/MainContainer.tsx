import { PropsWithChildren, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  useEffect(() => {
    const bar = document.querySelector(".scroll-progress") as HTMLElement | null;
    const wrapper = document.getElementById("smooth-wrapper");
    if (!bar || !wrapper) return;

    const updateProgress = () => {
      const scrollTop = wrapper.scrollTop || window.scrollY || 0;
      const scrollHeight =
        (wrapper.scrollHeight || document.documentElement.scrollHeight) -
        window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;
      bar.style.setProperty("--scroll-progress", String(progress));
    };

    wrapper.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      wrapper.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="container-main">
      <div className="scroll-progress" />
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
