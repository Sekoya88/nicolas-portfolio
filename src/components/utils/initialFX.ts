import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#05080f",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    {
      type: "chars,lines",
      linesClass: "split-line",
    }
  );
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  gsap.set([".landing-h2-2", ".landing-h2-info-1"], { opacity: 1 });

  var landingText2 = new SplitText(".landing-h2-info", TextProps);
  var landingText4 = new SplitText(".landing-h2-1", TextProps);

  gsap.fromTo(
    [landingText2.chars, landingText4.chars],
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.015,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
  var landingText5 = new SplitText(".landing-h2-2", TextProps);

  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  // Ensure Text2 starts fully hidden
  gsap.set(Text2.chars, { opacity: 0, y: 80 });

  const swapDuration = 1.2;
  const holdDuration = 4;

  const tl = gsap.timeline({ repeat: -1 });

  // Phase 1: Hold Text1 visible for holdDuration
  tl.to({}, { duration: holdDuration });

  // Phase 2: Swap — Text1 out, Text2 in (simultaneously)
  tl.to(Text1.chars, {
    y: -80,
    opacity: 0,
    duration: swapDuration,
    ease: "power3.inOut",
    stagger: 0.03,
  });
  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: swapDuration,
      ease: "power3.inOut",
      stagger: 0.03,
      immediateRender: false,
    },
    "<"
  );

  // Phase 3: Hold Text2 visible for holdDuration
  tl.to({}, { duration: holdDuration });

  // Phase 4: Swap back — Text2 out, Text1 in (simultaneously)
  tl.to(Text2.chars, {
    y: -80,
    opacity: 0,
    duration: swapDuration,
    ease: "power3.inOut",
    stagger: 0.03,
  });
  tl.fromTo(
    Text1.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: swapDuration,
      ease: "power3.inOut",
      stagger: 0.03,
      immediateRender: false,
    },
    "<"
  );
}
