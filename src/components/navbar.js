import React from "react";

function navbar(){
    return(
        <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="font-burtons text-xl">Developer By Mohith</h1>
            <ul className="flex items-center">
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
            </ul>
        </nav>
    )
};

export default navbar;