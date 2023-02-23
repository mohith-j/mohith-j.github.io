import React from "react";
import Mohith from "../resources/MohithPic.jpeg";

function profileimage(){
    return(
        <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden hover:scale-105 transition-all">
            <img src={Mohith} layout="fill" objectFit="cover" />
        </div>
    );
};

export default profileimage;