"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getEndPath = () => {
    const path = pathname.split("/");
    return path[path.length - 1];
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (!event.target!.closest(".dropdown")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <main className="dropdown relative">
      <button
        data-ripple-light="true"
        data-popover-target="menu"
        className="bg-maroon select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={toggleDropdown}
      >
        {getEndPath()}
        <span className="ml-3">&#9662;</span>
      </button>
      {isOpen && (
        <ul
          role="menu"
          data-popover="menu"
          data-popover-placement="bottom"
          className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-2 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
        >
          <li
            role="menuitem"
            className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <Link href={"/team/2023-2024"}>2023-2024</Link>
          </li>
        </ul>
      )}
    </main>
  );
}

export default DropDown;
