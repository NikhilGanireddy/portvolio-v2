"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import IconLine from "../../icons/LineIcon";
import IconArrowRight from "../../icons/ArrowRight";
import PerspectiveText from "../PerspectiveText";

const HomePage = () => {
    const delayDefault = 0.025
    const variants = {
        initial: {
            y: "50px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }


    return <div
        className={`flex flex-col justify-center items-center h-full min-h-full rounded-b-3xl overflow-y-auto bg-neutral-200 text-black px-4 lg:px-16 pb-2 lg:pb-4 `}>
        <div className={`flex-1 flex flex-col justify-center gap-12`}>
            <motion.p
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.100
                }}
                className={` text-2xl md:text-4xl lg:text-5xl tracking-[-0.055em]  font-light`}>
                Hello! This is Nikhil Ganireddy<IconLine className={`inline-flex text-black`}/>a passionate UI designer
                and full-stack developer.
                I seamlessly blend design and functionality to craft engaging digital experiences for
                brands and users alike.
            </motion.p>

            <motion.p
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.175 + delayDefault + 0.125
                }}
                className={`font-light text-lg md:text-xl lg:text-3xl text-neutral-500 tracking-tighter`}>If you're
                interested in
                working with me,
                <Link href={"/"}
                      className={`text-black ml-2 group hover:text-orange-500 ease-in duration-200 transition-all`}>
                    let’s talk
                    <IconArrowRight
                        className={` inline-flex ml-1 group-hover:translate-x-2 ease-in duration-200 transition-all group-hover:text-orange-500`}/>
                </Link>
            </motion.p>
        </div>
        <div className={`h-max py-8 w-full flex flex-col md:flex-row gap-6`}>
            <div className={`w-full md:w-1/2  flex flex-col justify-center text-sm  `}>
                <motion.h4 initial={"initial"}
                           animate={"enter"}
                           variants={variants}
                           transition={{
                               duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.150 + delayDefault
                           }}>Freelance
                </motion.h4>
                <motion.h4 initial={"initial"}
                           animate={"enter"}
                           variants={variants}
                           transition={{
                               duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.175 + delayDefault
                           }}>UI Designer
                </motion.h4>
                <motion.h4 initial={"initial"}
                           animate={"enter"}
                           variants={variants}
                           transition={{
                               duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.200 + delayDefault
                           }}>Full stack developer
                </motion.h4>
            </div>
            <div className={`w-full md:w-1/2 flex justify-between items-end  text-sm `}>
                <div>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.225 + delayDefault
                               }}>Based in
                    </motion.h4>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.250 + delayDefault
                               }}>India
                    </motion.h4>
                </div>
                <div>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.275 + delayDefault
                               }}>Get in touch
                    </motion.h4>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.300 + delayDefault
                               }}
                               className={`font-normal text-sm   duration-200 ease-in transition-colors hover:text-orange-500 `}>
                        <motion.a
                            initial={"initial"}
                            animate={"enter"}
                            variants={variants}
                            transition={{
                                duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.325 + delayDefault
                            }}
                            href="mailto:email@example.com" className={`w-fit btns`}>
                            <PerspectiveText text={`nikhilganireddy@yahoo.com`}/>
                        </motion.a>
                    </motion.h4>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage
