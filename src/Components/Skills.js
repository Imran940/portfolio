import { Progress, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import sanityClient from "../sanity";
import { RenderIconByName } from "./ProjectCard";

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "skills"]{
     ...
    }`
      )
      .then((data) => {
        console.log(data);
        setSkills(data);
      })
      .catch(console.error);
  }, []);

  const getColorByPercentage = (percentage) =>
    percentage < 30
      ? "#fc4e03"
      : percentage < 60
      ? "#fc8403"
      : percentage < 80
      ? "#03bafc"
      : "#03fc1c";
  return (
    <div className="max-w-7xl flex flex-col gap-10 items-center mx-auto px-2 h-full pt-20">
      <span className="pb-1 text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
        Skills
      </span>
      <div className="w-full flex flex-col gap-5 md:gap-10 justify-center  md:w-1/2">
        {skills.map((s) => (
          <div>
            <div className="my-1 flex justify-between">
              <span className="flex items-center gap-2 text-lg font-bold">
                <RenderIconByName name={s.icon} />
                <span>{s.title}</span>
              </span>
              <span className="text-lg font-bold">{s.progress}%</span>
            </div>
            <Tooltip className="cursor-pointer" title={s.progress}>
              <Progress
                width={100}
                strokeColor={getColorByPercentage(s.progress)}
                strokeWidth={20}
                percent={s.progress}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
