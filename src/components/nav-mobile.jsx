"use client";

import { MenuIcon, CloseIcon } from "@/utils/icons";
import { useState } from "react";
import { navItemsList } from "./navbar";

function NavMobile() {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => setOpenMenu(prev => !prev);

  return (
    <>
      <button className="block z-30 mr-5 lg:hidden" onClick={handleToggleMenu}>
        {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        className={"fixed inset-0 bg-black/50 lg:hidden ".concat(
          !isOpenMenu ? "invisible pointer-events-none -z-10" : "z-10"
        )}
      ></div>

      <div
        className={"fixed top-0 left-0 bottom-0 w-80 z-20 bg-white p-5 lg:hidden duration-300 delay-200 ".concat(
          isOpenMenu ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ul className="space-y-4 mt-14 text-gray-800">
          {navItemsList.map(item => (
            <li key={item}>
              <a href="/" className="text-lg font-bold">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavMobile;
