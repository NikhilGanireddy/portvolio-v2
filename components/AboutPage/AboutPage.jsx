"use client"

import {motion} from "framer-motion";
import nikhil from "/public/images/Nikhil_Ganireddy.jpg"
import Image from "next/image";
import PerspectiveText from "../PerspectiveText";

const AboutPage = () => {
    const delayDefault = 0.025
    const variants = {
        initial: {
            y: "30px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }

    return <div
        className={`flex flex-col justify-center items-center h-full min-h-full  rounded-b-3xl overflow-y-auto  bg-neutral-200 text-black px-4 lg:px-16 pb-2 lg:pb-4`}>
        <div className={` h-full w-full flex flex-col justify-end pt-24 py-12 lg:py-24 items-center gap-4 lg:gap-8`}>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.100
                }}
                className={`h-max w-full flex justify-between items-center border-b border-b-neutral-400 pb-4 lg:pb-8`}>
                <h1
                    className={`text-4xl lg:text-5xl tracking-[-0.055em]  font-normal`}>About</h1>
                <Image
                    className={` shadow-black aspect-square w-20 h-20 lg:w-40 lg:h-40 rounded-full lg:rounded-3xl `}
                    src={nikhil}
                    alt={"Profile Pic"} width={811} height={811}/>
            </motion.div>
            <div className={` w-full flex flex-col lg:flex-row gap-4`}>
                <motion.span
                    initial={"initial"}
                    animate={"enter"}
                    variants={variants}
                    transition={{
                        duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.125
                    }}
                    className={`w-full lg:w-2/4`}>I, Overview
                </motion.span>
                <div className={`w-full lg:w-2/4 flex flex-col gap-4`}>
                    <motion.p
                        initial={"initial"}
                        animate={"enter"}
                        variants={variants}
                        transition={{
                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.150 + delayDefault
                        }}
                        className={`text-sm md:text-base leading-6 md:leading-8`}>
                        Hi I'm Nikhil Ganireddy, a computer science undergrad student with a passion for programming.
                        Transitioning from my academic journey, I've immersed myself in mastering
                        full-stack web development. The thrill of problem-solving is what fuels my enthusiasm, and I
                        specialize in React, Next.js, Node.js, and MongoDB. Proficient in TypeScript, and
                        Prisma, I am constantly exploring cutting-edge technologies. Currently seeking a fulfilling role
                        as a software developer, I bring a dynamic skill set and an eagerness to contribute to
                        innovative projects.
                    </motion.p>
                    <motion.p
                        initial={"initial"}
                        animate={"enter"}
                        variants={variants}
                        transition={{
                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.175 + delayDefault
                        }}
                        className={`text-sm md:text-base leading-6 md:leading-8 `}>
                        Beyond coding, I find joy in video games, anime, and quality time with friends. If you have an
                        exciting opportunity aligning with my skills, feel free to reach out—I'm ready for the next
                        challenge.
                    </motion.p>
                    <motion.a
                        initial={"initial"}
                        animate={"enter"}
                        variants={variants}
                        transition={{
                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.200 + delayDefault
                        }}
                        href="mailto:email@example.com" className={`text-sm md:text-base btns w-fit`}>
                        <PerspectiveText text={`nikhilganireddy@yahoo.com`}/>
                    </motion.a>

                </div>
            </div>
        </div>

    </div>
}

export default AboutPage
