import React, { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import sanityClient from "../sanity";
import {
  githubLink,
  linkedInLink,
  openNotification,
  siteColor,
} from "./constants";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function About() {
  const [userInputs, setUserInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { name, email, message } = userInputs;
  const currentYear = new Date().getFullYear();

  const handleFormSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      await sanityClient.create({
        _type: "contacts",
        name,
        email,
        message,
      });
      openNotification("success", "Details Saved Successfully");
      setUserInputs({ name: "", email: "", message: "" });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      openNotification("error", "Something wents wrong");
      console.log(err);
    }
  };
  return (
    <div className="max-w-7xl h-fit mx-auto px-2 py-20 flex flex-col text-center md:text-left justify-center items-center ">
      <div className="text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
        About Me
      </div>

      <div className="mt-8 w-full flex md:flex-row md:justify-between flex-col-reverse gap-8 px-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-col space-y-2">
            <p className="text-4xl font-bold mb-0">
              Hello 👋, Imran Shaikh Here{" "}
            </p>
            <div className="flex flex-col md:flex-row">
              <span className="text-xl">Senior Web Developer 🧑‍💻</span>
              <span className="text-xl">
                ( {currentYear - 2020} years Experience )
              </span>
            </div>
          </div>

          <p className="md:w-3/4 w-full">
            I'm a skilled web developer with over {currentYear - 2020}+ years of
            dedicated experience in crafting websites and web applications. My
            expertise lies in using various web technologies and programming
            languages. What sets me apart is my track record of consistently
            delivering projects on time and exactly as per the clients' needs.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src="/images/Profile.jpg"
            className="w-3/4 md:w-full object-contain rounded-full"
          />
          <div></div>
        </div>
      </div>

      <div className="mt-16">
        <p
          className={`text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 `}
        >
          Contact Me
        </p>
      </div>
      <div className="w-full sm:grid grid-cols-2 gap-8 px-4">
        <div className="mt-10">
          <form
            id="contactForm"
            onSubmit={handleFormSubmit}
            className="flex flex-col max-w-[600px] w-full"
          >
            <p>
              Submit the query below or shoot me an email at
              <i> coddershaikh@gmail.com</i>
            </p>
            <input
              className="bg-[#ccd6f6] rounded-lg mt-2 px-2 text-black/95 p-2  ring-yellow-600 focus:ring capitalize text-lg"
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) =>
                setUserInputs((userInputs) => ({
                  ...userInputs,
                  name: e.target.value,
                }))
              }
              required
            />
            <input
              className="bg-[#ccd6f6] my-4 p-2 rounded-xl px-2 text-black/95 ring-yellow-600 focus:ring  text-lg"
              name="email"
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) =>
                setUserInputs((userInputs) => ({
                  ...userInputs,
                  email: e.target.value,
                }))
              }
              required
            />
            <textarea
              className="bg-[#ccd6f6] shadow p-2 rounded-xl text-black/95  ring-yellow-600 focus:ring   text-lg"
              name="message"
              rows="6"
              placeholder="Message"
              value={message}
              onChange={(e) =>
                setUserInputs((userInputs) => ({
                  ...userInputs,
                  message: e.target.value,
                }))
              }
              required
            ></textarea>
            <button
              className={`w-full  sm:w-[100px] rounded-md flex  justify-center items-center h-5  bg-yellow-600 p-5 mt-4`}
              onClick={handleFormSubmit}
              type="submit"
            >
              <AiOutlineLoading3Quarters
                className={`${loading ? "animate-spin" : "hidden"} mr-2`}
                size={25}
              />{" "}
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-between items-center h-[20%]  sm:mt-20 ">
          <p className="pt-5 text-2xl sm:pt-0">My Social Handles</p>
          <div className="text-2xl flex gap-5 w-[30%]">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
