import React from "react";
import { GrReactjs } from "react-icons/gr";
import { SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { Tooltip, Button } from "antd";
import { AiOutlineLink } from "react-icons/ai";

function ProjectCard() {
  return (
    <div className="bg-[rgb(0,7,21)] w-full rounded-lg h-[100%] p-10 flex flex-col  flex-shrink-0 gap-5 md:w-1/2 snap-center">
      <div className="overflow-hidden relative pb-[56.25%] w-full h-1/2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/f8z0uCqXz0A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="left-0 top-0 h-full w-full absolute"
        />
      </div>
      <div className="h-1/2 flex flex-col gap-4">
        <span className="text-lg md:text-3xl font-bold">
          Firebase Authentication
        </span>
        <span className="text-gray-500 h-[20%] overflow-y-auto">
          This is the project where we can do authentication by firebase and we
          can have oauths functionality This is the project where we can do
          authentication by firebase and we can have oauths functionality This
          is the project where we can do authentication by firebase and we can
          have oauths functionality This is the project where we can do
          authentication by firebase and we can have oauths functionality
        </span>

        <div className="flex flex-col items-center gap-2 md:flex-row">
          <span className="font-bold">Technologies Used:</span>
          <div className="flex gap-3">
            <Tooltip className="cursor-pointer" title="Reactjs">
              <GrReactjs size={20} />
            </Tooltip>
            <Tooltip className="cursor-pointer" title="Nodejs">
              <IoLogoNodejs size={20} />
            </Tooltip>
            <Tooltip className="cursor-pointer" title="Firebase">
              <SiFirebase size={20} />
            </Tooltip>
            <Tooltip className="cursor-pointer" title="MongoDB">
              <SiMongodb size={20} />
            </Tooltip>
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: "black",
              color: "white",
              outline: "none",
              borderRadius: "5px",
            }}
            icon={<ImGithub size={20} />}
          >
            View Code
          </Button>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              background: " rgb(59 130 246)",
              color: "white",
              outline: "none",
              borderRadius: "5px",
            }}
            icon={<AiOutlineLink size={20} />}
          >
            View Site
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
