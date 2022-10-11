import React from "react";

function About() {
  return (
    <div className="w-full h-screen text-white">
      <div className="flex flex-col justify-center items-center w-full h-full before:">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-3xl sm:text-5xl font-bold inline border-b-4 border-pink-600">
            About Us
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-3xl font-bold ">
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

        <div className="sm:text-right mt-8">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600 ">
            Contact Us
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mt-10">
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div>
            <form action="" className="flex flex-col max-w-[600px] w-full">
              <p>Submit the Query below or shoot me an email at -abc@mail.cm</p>
              <input
                className="bg-[#ccd6f6] rounded-lg mt-5 px-2 text-black/95 p-2 font-serif"
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
            {/* <div className="text-2xl flex justify-between w-40 items-center mx-[25%] sm:mx-[33%] mt-5">
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-instagram"></i>
            </div> */}
            <div className="text-2xl flex justify-between w-[30%]">
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-github"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
