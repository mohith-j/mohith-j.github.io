import React from "react";

function navbar(){
    return(
        <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="font-burtons text-3xl">My Portfolio</h1>
            <ul className="flex items-center text-teal-600">
              {/* <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-t from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
              <li className="mx-5">Skills</li>
              <li className="mx-5">Experience</li>
              <li className="mx-5">Research Papers</li>
              <li className="mx-5">Projects</li>
              <li className="mx-5">Contact Me</li>
            </ul>
        </nav>
    )
};

export default navbar;