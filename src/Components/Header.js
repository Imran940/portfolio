import React, { useState } from "react";
import MenuItems from "./MenuItems";

const Header = () => {
  const [active, setActive] = useState(false);
  /*
  const showMenu = () => {
    setActive(!active);
  };*/

  //   window.addEventListener("resize", () => {
  //     setActive(false);
  //   });

  return (
    <div className="sticky top-0 w-full text-white font-normal text-[20px] p-4 flex justify-between">
      <div className="font-mono  items-center gap-2 flex">
        <i className="fa-brands fa-slack"></i>
        <span>Portfolio</span>
      </div>

      <ul className="hidden text-center font-sans justify-between w-[60%] sm:flex">
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>About Us</li>
      </ul>

      {active && <MenuItems />}
      <i
        onClick={() => setActive(!active)}
        className={`fa-solid cursor-pointer sm:hidden ${
          active ? "fa-xmark" : "fa-bars"
        }`}
      ></i>

      <div className="hidden w-[5%] justify-between items-center sm:flex ">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-sun px-3"></i>
      </div>
    </div>
  );
};

export default Header;
