import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineLink,
} from "react-icons/ai";
import sanityClient from "../sanity";

function Projects() {
  const ref = useRef(null);
  const [projects, setProjects] = useState([]);
  const scroll = (scrollOffset) => {
    ref.current.scrollTo({
      left: ref.current.scrollLeft + scrollOffset,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"]{
     ...,
     techs_used[]-> 
    }`
      )
      .then((data) => {
        setProjects(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="max-w-7xl flex flex-col gap-10 items-center mx-auto px-2 h-full pt-16 ">
      <span className="pb-1 text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
        Projects
      </span>
      <div className="relative w-full h-[88%]">
        {projects.length > 2 && (
          <AiFillCaretLeft
            onClick={() => scroll(-500)}
            className="hidden absolute justify-center items-center z-10 cursor-pointer top-[50%]  md:flex  md:left-[-5px] bg-gray-600 rounded-md "
            size={40}
            //aria-disabled
          />
        )}
        <div
          ref={ref}
          className="max-w-full  overflow-y-hidden h-full flex gap-5 overflow-x-auto snap-x snap-mandatory"
        >
          {projects.map((p) => (
            <ProjectCard
              title={p.title}
              description={p.description}
              techsUsed={p.techs_used}
              videoId={p.video_id}
              githubUrl={p.github_url}
              projectUrl={p.website_url}
              createdAt={p.created_at}
            />
          ))}
        </div>

        {projects.length > 2 && (
          <AiFillCaretRight
            onClick={() => scroll(500)}
            className="absolute z-10 cursor-pointer top-[50%] hidden md:block md:right-[-5px] bg-gray-600 rounded-md"
            size={40}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
