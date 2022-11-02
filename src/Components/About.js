import React from "react";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { githubLink, linkedInLink } from "./constants";

function About() {
  return (
    <div className="max-w-7xl h-fit mx-auto px-2 py-20 flex flex-col text-center md:text-left justify-center items-center ">
      <div className="text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
        About Us
      </div>

      <div className="mt-5 w-full sm:grid grid-cols-2 gap-8 px-4">
        <div>
          <p className="text-3xl font-bold ">
            Hello, How can we help you. Please take a look around.
          </p>
        </div>
        <div>
          <p className="pt-5 sm:pt-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A est,
            doloribus voluptatum inventore adipisci harum repudiandae incidunt
            dolorum pariatur possimus nihil consequatur deleniti accusantium,
            quo quisquam totam at enim repellat.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 ">
          Contact Us
        </p>
      </div>
      <div className="w-full sm:grid grid-cols-2 gap-8 px-4">
        <div className="mt-10">
          <form className="flex flex-col max-w-[600px] w-full">
            <p>
              Submit the query below or shoot me an email at
              <i> borntostruggle12@gmail.com</i>
            </p>
            <input
              className="bg-[#ccd6f6] rounded-lg mt-2 px-2 text-black/95 p-2 font-serif"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="bg-[#ccd6f6] my-4 p-2 rounded-xl px-2 text-black/95 font-serif"
              type="email"
              placeholder="E-Mail"
              name="email"
            />
            <textarea
              className="bg-[#ccd6f6] p-2 rounded-xl text-black/95 font-serif"
              name="message"
              id=""
              rows="6"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <div className="flex flex-col justify-between items-center h-[30%]  sm:mt-20 ">
          <p className="pt-5 text-2xl sm:pt-0">Our Social Handles</p>
          <div className="text-2xl flex justify-between w-[30%]">
            <ImLinkedin
              className="cursor-pointer"
              onClick={() => window.open(linkedInLink)}
              size={25}
            />
            <ImGithub
              className="cursor-pointer"
              onClick={() => window.open(githubLink)}
              size={25}
            />

            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
