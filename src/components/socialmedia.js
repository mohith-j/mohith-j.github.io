import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function socialmedia(){
    return(
        <ul className="text-5xl flex justify-center gap-16 text-gray-700">
            <li className="hover:scale-125 transition-all"><a href="https://github.com/mohith-j" target="_blank"><AiFillGithub /></a> </li>
            <li className="hover:scale-125 transition-all"><a href="https://www.linkedin.com/in/mohithj/" target="_blank"><AiFillLinkedin /></a></li>
            <li className="hover:scale-125 transition-all"><a href="mailto:mjothika@asu.edu" target="_blank"><AiFillMail /></a></li>
        </ul>
    )
};
export default socialmedia;