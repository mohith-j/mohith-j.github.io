import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Resume from "../resources/Resume Mohith.pdf";

function navbar() {
  return (
    <nav className=" py-10 mb-12 flex justify-between">
      <h1 className="font-burtons text-3xl">My Portfolio</h1>
      <ul className="flex items-center text-teal-600">
        <li className="mx-5 hover:scale-125 transition-all">
          <a
            className="bg-gradient-to-t from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            href={Resume}
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li className="mx-5 hover:scale-125 transition-all">
          <Link to="#skills" smooth>
            Skills
          </Link>
        </li>
        <li className="mx-5 hover:scale-125 transition-all">
          <Link to="#experience" smooth>
            Experience
          </Link>
        </li>
        <li className="mx-5 hover:scale-125 transition-all">
          <Link to="#research" smooth>
            Research Papers
          </Link>
        </li>
        <li className="mx-5 hover:scale-125 transition-all">
          <Link to="#projects" smooth>
            Projects
          </Link>
        </li>
        <li className="mx-5 hover:scale-125 transition-all">
          <Link to="#contact" smooth>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
