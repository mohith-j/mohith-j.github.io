import React from "react";
import Skill from "./skill.js";

function skills() {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-3xl text-center py-2 text-teal-600 font-medium">
            Top Skills
          </h2>
        </div>
        <Skill/>
      </div>
    </div>
  );
}

export default skills;
