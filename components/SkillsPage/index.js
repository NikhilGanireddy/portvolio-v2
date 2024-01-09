import Frontend from "../../icons/FrontEnd/Frontend";
import Backend from "../../icons/Backend/Backend";
import Database from "../../icons/Database/Database";
import Tools from "../../icons/Tools/Tools";
import Nextjs from "../../icons/FrontEnd/NextJs";
import React from "../../icons/FrontEnd/React";
import Typescript from "../../icons/FrontEnd/Typescript";
import Tailwindcss from "../../icons/FrontEnd/Tailwindcss";
import Framer from "../../icons/FrontEnd/Framer";
import Javascript from "../../icons/FrontEnd/Javascript";
import CSS from "../../icons/FrontEnd/CSS";
import Html from "../../icons/FrontEnd/Html";
import Mongodb from "../../icons/Database/MongoDb";
import Prisma from "../../icons/Database/Prisma";
import Express from "../../icons/Backend/Express";
import Nodejs from "../../icons/Backend/Nodejs";
import Python from "../../icons/Backend/Python";
import Vercel from "../../icons/Tools/Vercel";
import Redux from "../../icons/Tools/Redux";
import Github from "../../icons/Tools/Github";
import Npm from "../../icons/Tools/npm";
import Postman from "../../icons/Tools/Postman";
import Vscode from "../../icons/Tools/VsCode";
import Webstorm from "../../icons/Tools/Webstorm";
import Intellijidea from "../../icons/Tools/Intellij";
import Styledcomponents from "../../icons/FrontEnd/StyledComponents";


const skills = [{
    title: "frontend", icon: <Frontend className={`w-6 h-6 lg:w-8 lg:h-8 font-light`}/>, skills: [{
        label: "Next JS", icon: <Nextjs className={`w-6 h-6 font-light`}/>, level: 85
    }, {
        label: "React", icon: <React className={`w-6 h-6 font-light`}/>, level: 90
    }, {
        label: "TypeScript", icon: <Typescript className={`w-6 h-6 font-light`}/>, level: 75
    }, {
        label: "Redux", icon: <Redux className={`w-6 h-6 font-light`}/>, toolType: "State Management Tool"
    }, {
        label: "Tailwind", icon: <Tailwindcss className={`w-6 h-6 font-light`}/>, level: 95
    }, {
        label: "Styled Comps", icon: <Styledcomponents className={`w-6 h-6 font-light`}/>, level: 90
    }, {
        label: "Framer Motion", icon: <Framer className={`w-6 h-6 font-light`}/>, level: 90
    }, {
        label: "Javascript", icon: <Javascript className={`w-6 h-6 font-light`}/>, level: 95
    }, {
        label: "CSS", icon: <CSS className={`w-6 h-6 font-light`}/>, level: 90
    }, {
        label: "HTML", icon: <Html className={`w-6 h-6 font-light`}/>, level: 95
    },]
}, {
    title: "database", icon: <Database className={`w-6 h-6 lg:w-8 lg:h-8 font-light`}/>, skills: [{
        label: "MongoDB", icon: <Mongodb className={`w-6 h-6 font-light`}/>, level: 90
    }, {
        label: "Mongoose", icon: "", level: 85
    }, {
        label: "Prisma", icon: <Prisma className={`w-6 h-6 font-light`}/>, level: 80
    },]
}, {
    title: "backend", icon: <Backend className={`w-6 h-6 lg:w-8 lg:h-8 font-light`}/>, skills: [{
        label: "Express.js", icon: <Express className={`w-6 h-6 font-light`}/>, level: 80
    }, {
        label: "Node.js", icon: <Nodejs className={`w-6 h-6 font-light`}/>, level: 80
    }, {
        label: "Python", icon: <Python className={`w-6 h-6 font-light`}/>, level: 70
    },]
}, {
    title: "tools", icon: <Tools className={`w-6 h-6 lg:w-8 lg:h-8 font-light`}/>, skills: [{
        label: "Vercel", icon: <Vercel className={`w-6 h-6 font-light`}/>, toolType: "Deployement Tool"
    }, {
        label: "GitHub", icon: <Github className={`w-6 h-6 font-light`}/>, toolType: "Version Control Tool"
    }, {
        label: "npm", icon: <Npm className={`w-6 h-6 font-light`}/>, toolType: "Package Manager"
    }, {
        label: "Postman", icon: <Postman className={`w-6 h-6 font-light`}/>, toolType: "API Platform"
    }, {
        label: "VsCode", icon: <Vscode className={`w-6 h-6 font-light`}/>, toolType: "Source-code Editor"
    }, {
        label: "Webstorm",
        icon: <Webstorm className={`w-6 h-6 font-light`}/>,
        toolType: "IDE for Javascript and Typescript development"
    }, {
        label: "IntelliJ Idea",
        icon: <Intellijidea className={`w-6 h-6 font-light`}/>,
        toolType: "IDE for Java and Kotlin development"
    },]
},

]

export default skills
