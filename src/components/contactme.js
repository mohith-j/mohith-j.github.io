import React from "react";
import { AiFillMail, AiFillLinkedin } from "react-icons/ai";

function contactme() {
  return (
    <div className="mb-10">
      <h3 className="text-3xl text-teal-600 text-center py-1  dark:text-white ">
        Contact Me
      </h3>
      <p className="py-2 text-center text-[20px]">
        Want to discuss about something?
      </p>
      <p className="py-2 text-center text-gray-700 text-[20px]">
        <a href="mailto:mjothika@asu.edu" target="_blank">
          Shoot me a mail <AiFillMail className="inline-block  text-3xl" />
        </a>
      </p>
      <p className="py-2 text-center text-gray-700 text-[20px]">
        <a href="https://www.linkedin.com/in/mohithj/" target="_blank">
          Message me on Linkedin{" "}
          <AiFillLinkedin className="inline-block text-3xl" />
        </a>
      </p>
    </div>
  );
}

export default contactme;
