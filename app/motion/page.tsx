/** @format */
"use client";

const Motion = () => {
  return (
    <>
      <div className="flex-col">
        <h2 className="mb-6 text-center text-4xl font-bold uppercase">
          Motion Graphics
        </h2>
        <div className="flex flex-wrap justify-center overflow-x-auto">
          <video
            className="w-45 mb-3 max-h-80"
            controls
            preload="none"
          >
            <source src="/portfolio/motion/Dreamy Donut.mp4" type="video/mp4" />
            <track
              src="/portfolio/motion/Dreamy Donut.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <video className="w-45 mb-3 ml-3 max-h-80" controls preload="none">
            <source src="/portfolio/motion/Ellie Louise.mp4" type="video/mp4" />
            <track
              src="/portfolio/motion/Ellie Louise.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <video className="w-45 ml-3 max-h-80" controls preload="none">
            <source
              src="/portfolio/motion/Lemon Blossom Elixir.mp4"
              type="video/mp4"
            />
            <track
              src="/portfolio/motion/Lemon Blossom Elixir.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Motion;
