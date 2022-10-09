import React from "react";

function MenuItems() {
  return (
    <div className="fixed left-0 top-0 w-1/2 h-full  bg-black/10 z-10">
      <ul
        className={
          "text-white flex-col flex items-center p-7 gap-7 w-full h-full mt-10 sm:hidden"
        }
      >
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>About Us</li>
        <li>
          <i class="fa-solid fa-user"></i> <i class="fa-solid fa-sun px-3"></i>
        </li>
      </ul>
    </div>
  );
}

export default MenuItems;
