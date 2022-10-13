import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback("You clicked outside of me!");
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
const Header = () => {
  const [active, setActive] = useState(false);
  const navigationRef = useRef(null);
  useOutsideAlerter(navigationRef, () => setActive(false));
  const Links = (
    <>
      <Link className="liItem" to="#home">
        Home
      </Link>
      <Link className="liItem" to="#projects">
        Projects
      </Link>
      <Link className="liItem" to="#skills">
        Skills
      </Link>
      <Link className="liItem" to="#aboutUs">
        About Us
      </Link>
    </>
  );
  const MenuItems = (
    <div
      ref={navigationRef}
      className="fixed left-0 top-0 w-1/2 h-full  bg-black/10 z-10 sm:hidden"
    >
      <ul
        className={
          "text-white flex-col flex items-center p-7 gap-7 w-full h-full mt-10"
        }
      >
        {Links}
        <li>
          <FiSun size={25} />
        </li>
      </ul>
    </div>
  );

  return (
    <div className="sticky top-0 h-[8%] text-white font-normal text-[20px] py-4 px-2 max-w-7xl mx-auto flex justify-between">
      <div className="font-mono cursor-pointer items-center gap-2 flex">
        <GrProjects className="bg-white" />
        <span>Portfolio</span>
      </div>

      <ul className="hidden text-center font-sans justify-between w-[60%] sm:flex">
        {Links}
      </ul>

      {active && MenuItems}
      {active ? (
        <AiOutlineMenuFold
          className="sm:hidden"
          onClick={() => setActive(!active)}
        />
      ) : (
        <AiOutlineMenuUnfold
          className="sm:hidden"
          onClick={() => setActive(!active)}
        />
      )}
      <div className="hidden w-[5%] justify-between items-center sm:flex ">
        <MdOutlineDarkMode size={25} />
        <FiSun size={25} />
      </div>
    </div>
  );
};

export default Header;
