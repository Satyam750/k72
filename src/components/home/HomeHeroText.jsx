import React, { useState } from "react";
import Video from "./Video";
import Photo from "./Photo";

const HomeHeroText = () => {
  const [videoReady, setVideoReady] = useState (false);
  return (
    <div  className="font-[font1] pt-5 text-center mt-72 lg:mt-0 text-white">
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">L'étincelle</div>
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">qui <div className="h-[7vw] w-[16vw] -mt-3 rounded-full overflow-hidden">
      <Video onReady={() => setVideoReady(true)} />
      {!videoReady && <Photo/>}
        </div>génère</div>
      <div className="text-[10vw] uppercase leading-[8vw] flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
