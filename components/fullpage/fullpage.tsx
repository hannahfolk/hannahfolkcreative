import { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import {
  withNavigationHandlers,
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Startup from "@components/startup/startup";

const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }) => {
  console.log({ fullpage });
  const isFirstLoad = useRef(true);
  const animation = "cubeAnimation";

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={10000}
      animation={animation}
      className="awesome-slider"
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current === true) {
          document.querySelector("body").classList.add("animated");
          document.querySelector("body").classList.add("visible");
        }
      }}
      media={media}
    />
  );
});