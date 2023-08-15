import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { GrProjects } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Switch } from "antd";

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
export const Links = (setActive) => (
  <>
    <li onClick={() => setActive && setActive(false)}>
      <Link className="liItem" to="#home" smooth>
        Home
      </Link>
    </li>
    <li onClick={() => setActive && setActive(false)}>
      <Link className="liItem" to="#projects" smooth>
        Projects
      </Link>
    </li>
    <li onClick={() => setActive && setActive(false)}>
      <Link className="liItem" to="#skills" smooth>
        Skills
      </Link>
    </li>
    <li onClick={() => setActive && setActive(false)}>
      <Link className="liItem" to="#aboutUs" smooth>
        About Us
      </Link>
    </li>
  </>
);

const Header = () => {
  const [active, setActive] = useState(false);
  const navigationRef = useRef(null);
  useOutsideAlerter(navigationRef, () => setActive(false));

  const MenuItems = (
    <div
      ref={navigationRef}
      className="fixed left-0 top-0 w-1/2 h-full bg-[#0F1624] z-10 sm:hidden"
    >
      <div className="w-full font-mono cursor-pointer h-[10%] items-center justify-center gap-2 flex">
        <GrProjects className="bg-white" />
        <span>Portfolio</span>
      </div>
      <ul
        className={
          "text-white flex-col flex items-center p-7 gap-7 w-full h-full"
        }
      >
        {Links(setActive)}
      </ul>
    </div>
  );

  return (
    <div className="fixed z-10 w-full top-0  text-white font-normal text-[20px] py-4 px-2 flex items-center justify-between bg-[#0F1624] sm:px-5">
      <div className="font-mono cursor-pointer items-center gap-2 flex">
        <GrProjects className="bg-white" />
        <span>Portfolio</span>
      </div>
      <ul className="hidden text-center font-sans items-center mb-0 justify-between w-[60%] sm:flex">
        {Links(setActive)}
      </ul>
      {active && MenuItems}

      <div className="justify-between items-center gap-5 flex md:hidden">
        {/* <Switch
          checkedChildren={<MdDarkMode size={20} />}
          unCheckedChildren={<FiSun color="yellow" size={20} />}
          defaultChecked
        /> */}
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
      </div>
    </div>
  );
};

export default Header;
