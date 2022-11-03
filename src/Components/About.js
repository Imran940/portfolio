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
        <p
          className={`text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 `}
        >
          Contact Us
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
              <i> borntostruggle12@gmail.com</i>
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
          <p className="pt-5 text-2xl sm:pt-0">Our Social Handles</p>
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
