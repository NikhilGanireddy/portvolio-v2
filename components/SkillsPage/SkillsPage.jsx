"use client"

import {motion} from "framer-motion";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../ui/tabs";
import skills from "./index";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "../ui/hover-card";
import {Progress} from "../ui/progress";

const SkillsPage = () => {
    const variants = {
        initial: {
            y: "50px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }

    return <div
        className={`flex flex-col justify-center items-center h-full min-h-full  rounded-b-3xl overflow-y-auto overflow-x-hidden bg-neutral-200 text-black px-4 lg:px-16 pb-2 lg:pb-4`}>
        <div
            className={` h-full w-full flex flex-col justify-end pt-24 py-12 lg:py-24 items-center gap-4 lg:gap-8`}>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.2
                }}
                className={`h-max w-full flex justify-between items-center border-b border-b-neutral-400 pb-8 lg:pb-12`}>
                <h1 className={`text-4xl lg:text-5xl tracking-[-0.055em] font-normal`}>Skills</h1>
            </motion.div>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.3
                }}
                className={` w-full flex flex-col gap-20 `}>
                <Tabs defaultValue="frontend"
                      className="min-h-[240px] flex-col lg:flex-row w-full flex justify-between items-center gap-6 lg:gap-16">
                    <TabsList
                        className={`grid grid-cols-2 gap-4 lg:gap-6 w-full lg:w-2/5 h-full rounded-3xl bg-transparent`}>
                        {skills.map((skill, index) => <TabsTrigger

                            className={`flex items-center justify-center space-x-2 font-light text-black relative capitalize text-sm group lg:text-base rounded-xl border border-neutral-400 h-16 lg:h-24 data-[state=active]:bg-black data-[state=active]:text-neutral-200 data-[state=active]:border-black transition-all ease-in-out duration-200`}
                            value={skill.title}
                            key={index}>
                            <span className={``}>{skill.icon}</span>
                            <span>{skill.title}</span>
                        </TabsTrigger>)}
                    </TabsList>
                    <motion.div
                        initial={"initial"}
                        animate={"enter"}
                        variants={variants}
                        transition={{
                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.3
                        }}
                        className={`flex flex-col w-full lg:w-3/5 h-full text-black border border-neutral-400 rounded-3xl p-4 lg:p-6`}>
                        {skills.map((skill, index) => <TabsContent className={``} value={skill.title}
                                                                   key={index}>
                            <motion.h1
                                initial={"initial"}
                                animate={"enter"}
                                variants={variants}
                                transition={{
                                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.3
                                }}
                                className={` capitalize border-b border-b-neutral-400 pb-2`}>
                                {skill.title}
                            </motion.h1>
                            <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full pt-4`}>
                                {skill.skills.map((skillLink, i) => <motion.div
                                    initial={"initial"}
                                    animate={"enter"}
                                    variants={variants}
                                    transition={{
                                        duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.3
                                    }}
                                ><HoverCard

                                    key={i}
                                    openDelay={0.1}
                                    closeDelay={0.1}>
                                    <motion.div
                                        initial={"initial"}
                                        animate={"enter"}
                                        variants={variants}
                                        transition={{
                                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.3 + i * 0.1
                                        }}
                                    >
                                        <HoverCardTrigger
                                            className={`flex flex-row items-center justify-start space-x-2 px-6 border-neutral-400 border py-3 cursor-pointer rounded-lg truncate hover:bg-black hover:text-neutral-200 duration-200 transition-all text-sm md:text-base leading-6 md:leading-8`}>
                                            <span>{skillLink.icon}</span>
                                            <span>{skillLink.label}</span>
                                        </HoverCardTrigger>
                                    </motion.div>
                                    <HoverCardContent
                                        className={`text-xs md:text-sm leading-6 md:leading-8 font-light w-full bg-neutral-200 flex flex-col justify-between gap-y-1`}>
                                        {skillLink.level ? <><span>Proficiency Level - {skillLink.level}%</span>
                                            <Progress value={skillLink.level}/></> : <>{skillLink.toolType}</>}
                                    </HoverCardContent>
                                </HoverCard></motion.div>)}
                            </div>
                        </TabsContent>)}
                    </motion.div>
                </Tabs>
            </motion.div>
        </div>
    </div>
}

export default SkillsPage
