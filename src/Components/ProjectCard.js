import React from "react";
import { GrReactjs } from "react-icons/gr";
import {
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiStripe,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { BsInfoCircleFill } from "react-icons/bs";

import { Tooltip, Button } from "antd";
import { AiOutlineLink } from "react-icons/ai";

export const RenderIconByName = ({ name }) => {
  let Icon;
  switch (name) {
    case "GrReactjs":
      Icon = GrReactjs;
      break;
    case "SiFirebase":
      Icon = SiFirebase;
      break;
    case "IoLogoNodejs":
      Icon = IoLogoNodejs;
      break;
    case "SiMongodb":
      Icon = SiMongodb;
      break;
    case "SiRedux":
      Icon = SiRedux;
      break;
    case "SiTypescript":
      Icon = SiTypescript;
      break;
    case "SiTailwindcss":
      Icon = SiTailwindcss;
      break;
    case "SiJavascript":
      Icon = SiJavascript;
      break;
    case "SiStripe":
      Icon = SiStripe;
      break;
    default:
      return <></>;
  }
  return <Icon size={20} />;
};

function ProjectCard({
  title,
  description,
  techsUsed,
  videoId,
  githubUrl,
  projectUrl,
  createdAt,
}) {
  return (
    <div className="relative bg-[rgb(0,7,21)] w-full rounded-lg h-[100%] p-10 flex flex-col  flex-shrink-0 gap-5 md:w-[48%] snap-center ">
      <Tooltip title={new Date(createdAt).toDateString()}>
        <BsInfoCircleFill
          className="absolute z-20 right-5 top-3 cursor-pointer"
          size={20}
        />
      </Tooltip>

      <div className="overflow-hidden relative pb-[56.25%] w-full h-1/2">
        {videoId ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            className="left-0 top-0 h-full w-full absolute"
          />
        ) : (
          <div className="left-0 top-0 h-full w-full absolute flex items-center justify-center">
            <p className="text-lg font-bold">NO VIDEO</p>
          </div>
        )}
      </div>
      <div className="h-1/2 flex flex-col gap-4">
        <span className="text-lg md:text-3xl font-bold">{title}</span>
        <span className="text-gray-500 h-[30%] overflow-y-auto">
          {description}
        </span>

        <div className="flex flex-col items-center gap-2 md:flex-row">
          <span className="font-bold">Technologies Used:</span>
          <div className="flex  gap-3">
            {techsUsed?.length &&
              techsUsed.map(({ icon, title }) => (
                <Tooltip className="cursor-pointer" title={title}>
                  <span>
                    <RenderIconByName name={icon} />
                  </span>
                </Tooltip>
              ))}
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
            onClick={() => githubUrl && window.open(githubUrl)}
          >
            {githubUrl ? "View Code" : "Private Repo"}
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
            onClick={() => projectUrl && window.open(projectUrl)}
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
