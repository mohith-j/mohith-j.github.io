import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail} from "react-icons/ai";

function socialmedia(){
    return(
        <div className="text-5xl flex justify-center gap-16 text-gray-700">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillMail />
        </div>
    )
};
export default socialmedia;