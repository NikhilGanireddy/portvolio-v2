"use client"

import {motion} from "framer-motion";
import Link from "next/link";
import IconLine from "../../icons/LineIcon";
import IconArrowRight from "../../icons/ArrowRight";

const HomePage = () => {
    const variants = {
        initial: {
            y: "50px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }
    return <div
        className={`flex flex-col justify-center items-center h-full rounded-b-3xl overflow-y-auto bg-white text-black px-4 lg:px-16  `}>
        <div className={`flex-1 flex flex-col justify-center gap-12`}>
            <motion.p
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1]
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
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.15
                }}
                className={`text-lg md:text-xl lg:text-3xl text-neutral-400 tracking-tighter`}>If you're interested in
                working with me,
                <Link href={"/"}
                      className={`text-black ml-2 group hover:text-orange-500 ease-in duration-200 transition-all`}>
                    let’s talk
                    <IconArrowRight
                        className={` inline-flex ml-1 group-hover:translate-x-2 ease-in duration-200 transition-all group-hover:text-orange-500`}/>

                </Link>
            </motion.p>
        </div>
        <div className={`h-max py-12 w-full flex flex-col md:flex-row gap-6`}>
            <div className={`w-full md:w-1/2  flex flex-col justify-center  text-sm md:text-base`}>
                <motion.h4 initial={"initial"}
                           animate={"enter"}
                           variants={variants}
                           transition={{
                               duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.175
                           }}>Freelance
                </motion.h4>
                <motion.h4 initial={"initial"}
                           animate={"enter"}
                           variants={variants}
                           transition={{
                               duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.2
                           }}>UI Designer
                </motion.h4>
                <motion.h4 initial={"initial"}
                           animate={"enter"}
                           variants={variants}
                           transition={{
                               duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.225
                           }}>Full stack developer
                </motion.h4>
            </div>
            <div className={`w-full md:w-1/2 flex justify-between items-end  text-sm md:text-base`}>
                <div>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.25
                               }}>Based in
                    </motion.h4>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.275
                               }}>India
                    </motion.h4>
                </div>
                <div>
                    <motion.h4 initial={"initial"}
                               animate={"enter"}
                               variants={variants}
                               transition={{
                                   duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.3
                               }}>Get in touch
                    </motion.h4>
                    <motion.a initial={"initial"}
                              animate={"enter"}
                              variants={variants}
                              transition={{
                                  duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.325
                              }} href="mailto:email@example.com"
                              className={`font-normal text-sm md:text-base duration-200 ease-in transition-colors hover:text-orange-500 `}>nikhilganireddy@yahoo.com
                    </motion.a>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage


export function MaskText() {
    return (<div className={styles.body}>
        {phrases.map((phrase, index) => {
            return <div key={index} className={styles.lineMask}>
                <p>{phrase}</p>
            </div>
        })}
    </div>)
}
