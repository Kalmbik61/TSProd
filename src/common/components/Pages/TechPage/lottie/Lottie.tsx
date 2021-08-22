import { useEffect, useRef, useState, memo } from "react";
import LottieProps from "./Lottie.props";
import lottie from "lottie-web";
import { Waypoint } from "react-waypoint";

function Lottie({ animation }: LottieProps) {
  const animation_1 = useRef(null);
  const animation_2 = useRef(null);
  const [renderLottie, setRenderLottie] = useState<boolean>(false);
  const [playSecondAnimation, setPlaySecondAnimation] = useState<boolean>(false);
  useEffect(() => {
    const start = lottie.loadAnimation({
      container: animation_1.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation[0],
    });
    start.addEventListener("complete", () => {
      setPlaySecondAnimation(true);
      lottie.loadAnimation({
        container: animation_2.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation[1],
      });
    });
  }, [renderLottie]);
  return (
    <>
      <Waypoint onEnter={() => setRenderLottie(true)} />
      {renderLottie && (
        <div className='container-lottie'>
          {!playSecondAnimation && <div ref={animation_1}></div>}
          {playSecondAnimation && <div ref={animation_2}></div>}
        </div>
      )}
    </>
  );
}
export default memo(Lottie);
