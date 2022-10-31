import React from "react";
import { GrProjects } from "react-icons/gr";
import Typewriter from "typewriter-effect";
import { Links } from "./Header";
function Footer() {
  return (
    <div className="w-full h-fit bg-black py-4">
      <div className="w-full flex justify-center items-center gap-2">
        <GrProjects className="bg-white text-xl" />
        <span className="font-mono text-lg sm:text-2xl">Portfolio</span>
      </div>
      <div className="w-full flex justify-center">
        <p className="font-serif text-center text-[10px] w-[80%] mt-2 sm:text-xl sm:mt-4">
          <Typewriter
            options={{
              strings: [
                "We are here to help you design, develop and build a beutiful Website for you.",
                "Feel free to contact us any time for any query",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
      </div>
      <div className="w-full flex justify-center mt-4">
        <ul className="items-center font-sans justify-between w-[40%] flex text-[10px] sm:text-xl">
          {Links()}
        </ul>
      </div>
      <div className="w-full flex justify-center gap-4">
        <p className="text-center text-[10px] mt-2 sm:text-xl sm:mt-4">
          +91 8169312893 / +91 9082074682
        </p>
        <p className="font-serif text-center text-[10px]  mt-2 sm:text-xl sm:mt-4">
          abc@gmail.com
        </p>
      </div>
      <div className="w-full flex justify-center">
        <small className="font-serif text-center  mt-2 text-[8px] sm:mt-4 sm:text-lg">
          &copy; Copyright 2018, Example Corporation
        </small>
      </div>
    </div>
  );
}

export default Footer;
