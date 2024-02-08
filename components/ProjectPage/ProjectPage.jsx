"use client"

import {motion} from "framer-motion";
import projects from "./Projects";
import Project from "./Projects/Project";

const ProjectPage = () => {
    const variants = {
        initial: {
            y: "30px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }
    return <div
        className={`flex flex-col justify-center items-center h-full min-h-full  rounded-b-3xl overflow-y-auto  bg-neutral-200 text-black px-4 lg:px-16 pb-2 lg:pb-4`}>
        <div
            className={` h-full w-full flex flex-col justify-end pt-36 py-12 lg:py-24 lg:pt-48 items-center gap-4 lg:gap-8`}>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.100
                }}
                className={`h-max w-full flex justify-between items-center border-b border-b-neutral-400 pb-4 lg:pb-8`}>
                <h1
                    className={`text-4xl lg:text-5xl tracking-[-0.055em]  font-normal`}>Projects</h1>
            </motion.div>
            <div className={`w-full grid grid-cols-1 lg:grid-cols-2 gap-12`}>
                {projects.map((project, index) => <Project
                    key={index}
                    title={project.title}
                    href={project.href}
                    images={project.images}
                    video={project.video}
                    id={project.id}
                    skills={project.skills}
                    height={project.height}
                    width={project.width}
                />)}
            </div>
        </div>

    </div>
}

export default ProjectPage
