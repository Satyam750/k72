import React, { useState } from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import Photo from "../components/home/Photo";

const Home = () => {
  const [videoReady, setVideoReady] = useState (false);
  return (
    <div>
      <div className="h-screen w-screen fixed inset-0">
      <Video onReady={() => setVideoReady(true)} />
        {!videoReady && <Photo/>}
      </div>
      <div className="h-screen w-screen overflow-hidden pb-2 relative flex flex-col justify-between">
       <HomeHeroText/>
       <HomeBottomText/>
      </div>
    </div>
  );
};

export default Home;
