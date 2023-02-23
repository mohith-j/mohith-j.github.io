import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";

function socialmedia(){
    return(
        <div className="text-5xl flex justify-center gap-16 text-gray-700">
            <a href="https://github.com/mohith-j" target="_blank"><AiFillGithub /></a> 
            <a href="https://www.linkedin.com/in/mohithj/" target="_blank"><AiFillLinkedin /></a>
            <a href="mailto:mjothika@asu.edu" target="_blank"><AiFillMail /></a>
        </div>
    )
};
export default socialmedia;