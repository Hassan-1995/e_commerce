"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  FiMenu,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
  FiChevronLeft,
} from "react-icons/fi";

const NavBar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const icons = [
    { href: "/search", icon: FiSearch },
    { href: "/profile", icon: FiUser },
    { href: "/cart", icon: FiShoppingBag },
  ];

  return (
    <nav className="flex bg-gray-600 w-screen items-center justify-between px-8 py-4 text-white">
      {/* Logo or Branding */}
      <div className="text-3xl font-bold">HAS</div>

      {/* Centered Links */}
      <ul className="space-x-8 hidden md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-lg font-medium ${
                link.href === currentPath
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-300"
              } hover:text-blue-300 hover:border-b-2 hover:border-blue-300 transition-all`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right-Aligned Icons */}
      <ul className="space-x-8 hidden md:flex">
        {icons.map((iconLink) => (
          <li key={iconLink.href}>
            <Link
              href={iconLink.href}
              className="hover:text-blue-300 transition-colors"
            >
              <iconLink.icon size={24} />
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile and Tablet Links (Collapsible Menu) */}
      <div
        className={`lg:hidden fixed top-[0px] right-0 bg-white h-screen w-screen border-l py-5 z-50 shadow-lg transform transition-transform duration-700 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 flex items-center text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          <FiChevronLeft size={30} />
          <p className="text-xl ml-2">Back</p>
        </button>
        <ul className="flex flex-col mt-14">
          {links.map((link) => (
            <li
              key={link.href}
              className={`py-2 pl-6 ${
                link.href === currentPath ? "bg-black" : "bg-white"
              }`}
            >
              <Link
                href={link.href}
                className={`text-lg font-bold ${
                  link.href === currentPath ? "text-white" : "text-black"
                } hover:text-gray-100 transition-colors`}
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
