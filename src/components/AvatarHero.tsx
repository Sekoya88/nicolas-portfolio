import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setAllTimeline, setPortraitTimeline } from "./utils/GsapScroll";
import { setProgress } from "./Loading";

const AVATAR_SRC = "/images/nicolas-avatar.png";

const AvatarHero = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    const img = new Image();

    const finish = () => {
      progress.loaded().then(() => {
        setTimeout(() => {
          setPortraitTimeline();
          setAllTimeline();
        }, 600);
      });
    };

    img.onload = () => {
      document.querySelector(".character-container")?.classList.add("character-loaded");
      finish();
    };
    img.onerror = () => {
      document.querySelector(".character-container")?.classList.add("character-loaded");
      progress.clear();
      setPortraitTimeline();
      setAllTimeline();
    };

    img.src = AVATAR_SRC;
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="avatar-hero__glow" aria-hidden />
      <div className="character-model landing-image avatar-hero">
        <div className="character-rim" aria-hidden />
        <div className="avatar-hero__frame">
          <img
            src={AVATAR_SRC}
            alt="Nicolas Edmond — stylized avatar"
            width={600}
            height={600}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarHero;
