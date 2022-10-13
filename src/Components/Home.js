import React from "react";
import { GiWorld } from "react-icons/gi";
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div className="w-full h-full flex flex-col-reverse items-center justify-between sm:flex-row">
      <div className="flex flex-col gap-5 sm:text-left">
        <div className="flex  flex-col gap-2 font-bold">
          <span className="text-5xl flex justify-center gap-3 sm:text-6xl sm:justify-start">
            <span>Hello World </span>
            <GiWorld className="animate-pulse" />{" "}
          </span>
          <span className="text-4xl flex gap-2 justify-center sm:text-5xl sm:justify-start">
            <span>Welcome</span>
            <Typewriter
              options={{
                strings: ["Designer", "Developer", "Coder"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <span className="text-[#BCBCBC] text-center  sm:w-3/4 sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div>
        <img src="/images/bulb.svg" width={590} height={563} />
      </div>
    </div>
  );
}

export default Home;
