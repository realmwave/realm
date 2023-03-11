import Lottie from "lottie-react";

import animation from "../../constants/animations/panda-eats-popcorn-animation.json";
import "./loading.scss";


export default function Loading() {
  return (
    <div className="w-full h-full flex flex-1 justify-center items-center" >
      <Lottie animationData={animation} loop={true} className="w-[400px] aspect-square" />
    </div>
  )
};

