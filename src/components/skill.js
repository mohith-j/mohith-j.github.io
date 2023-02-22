import React from "react";
import Python from "../resources/skills/python.png"
import Java from "../resources/skills/java.png"
import Javascript from "../resources/skills/javascript.png"
import Tailwind from "../resources/skills/tailwind.png"
import ReactJS from "../resources/skills/react.png"
import VueJS from "../resources/skills/vue.png"
import NodeJS from "../resources/skills/node.png"
import Php from "../resources/skills/php.png"
import Springboot from "../resources/skills/springboot.png"
import Postgresql from "../resources/skills/postgresql.png"
import Mysql from "../resources/skills/mysql.png"
import Mongodb from "../resources/skills/mongodb.png"
import Firebase from "../resources/skills/firebase.png"
import Aws from "../resources/skills/aws.png"
import Tableau from "../resources/skills/tableau.png"
import Docker from "../resources/skills/docker.png"


function skill(){
    return(
        <div className="w-full grid grid-cols-{6} sm:grid-cols-4 gap-8 text-center py-8">
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Python}/>
                <p className="mt-2">Python</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Java}/>
                <p className="mt-2">Java</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Javascript}/>
                <p className="mt-2">JavaScript</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Tailwind}/>
                <p className="mt-2">Tailwind</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={ReactJS}/>
                <p className="mt-2">React.JS</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={VueJS}/>
                <p className="mt-2">Vue.JS</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={NodeJS}/>
                <p className="mt-2">Node.JS</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Php}/>
                <p className="mt-2">PHP</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Springboot}/>
                <p className="mt-2">Spring Boot</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Postgresql}/>
                <p className="mt-2">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Mysql}/>
                <p className="mt-2">MySQL</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Mongodb}/>
                <p className="mt-2">MongoDB</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Firebase}/>
                <p className="mt-2">FireBase</p>
            </div>
            <div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Aws}/>
                <p className="mt-2">AWS</p>
            </div><div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-[140px] mx-auto" src={Tableau}/>
                <p className="mt-2">Tableau</p>
            </div><div className="text-center shadow-lg p-3 rounded-xl">
                <img className="w-20 mx-auto" src={Docker}/>
                <p className="mt-2">Docker</p>
            </div>
        </div>
    );
};

export default skill;