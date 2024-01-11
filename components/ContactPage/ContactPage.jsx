"use client"

import {motion} from "framer-motion";
import PerspectiveText from "../PerspectiveText";
import {Input} from "../ui/input";
import {Textarea} from "../ui/textarea";
import {Button} from "../ui/button";

const ContactPage = () => {
    function* nope(inc) {

        yield 10 + 10 * inc;
        yield inc + 10 + 11 * 10;
        yield 11 + inc + 11 * 11;
    }

    var make = nope("110");


    console.warn(make.next().value + make.next().value)

    const delayDefault = 0.025
    const variants = {
        initial: {
            y: "30px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }

    return <div
        className={`scroll-smooth flex flex-col justify-center items-center h-full min-h-full  rounded-b-3xl overflow-y-auto  bg-neutral-200 text-black px-4 lg:px-16 pb-2 lg:pb-4`}>
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
                    className={`text-4xl lg:text-5xl tracking-[-0.055em]  font-normal`}>Contact</h1>
            </motion.div>
            <div className={` w-full flex flex-col lg:flex-row gap-4 `}>
                <div className={`w-full flex-col lg:flex-row flex gap-6 lg:gap-12 `}>
                    <motion.div
                        initial={"initial"}
                        animate={"enter"}
                        variants={variants}
                        transition={{
                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.200
                        }}
                        className={`flex lg:flex-row flex-col gap-0 lg:gap-1.5 items-center w-full  justify-center lg:justify-start`}>
                        <h1 className={`text-sm md:text-base leading-6 md:leading-8 font-light`}>Get in touch or shoot
                            me an
                            email directly on </h1>
                        <a
                            href="mailto:email@example.com" className={`text-sm md:text-base btns `}>
                            <PerspectiveText text={`nikhilganireddy@yahoo.com`}/>
                        </a>
                    </motion.div>
                    <form className={`w-full flex justify-end items-end`}>
                        <div className={`w-full  flex flex-col items-center gap-6`}>
                            <motion.span
                                initial={"initial"}
                                animate={"enter"}
                                variants={variants}
                                transition={{
                                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.400
                                }}
                                className={`w-full`}><Input
                                className={` capitalize rounded-lg border border-neutral-400 py-6 pr-8 pl-4 `}
                                type={`text`} placeholder={`Name`}/></motion.span>

                            <motion.span
                                initial={"initial"}
                                animate={"enter"}
                                variants={variants}
                                transition={{
                                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.400
                                }}
                                className={`w-full`}><Input
                                className={`  rounded-lg border border-neutral-400 py-6 pr-8 pl-4 `}
                                type={`email`} placeholder={`Email`}/></motion.span>
                            <motion.div
                                initial={"initial"}
                                animate={"enter"}
                                variants={variants}
                                transition={{
                                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.500
                                }}
                                className={`w-full`}><Textarea placeholder={"Message"}
                                                               className={`rounded-lg border border-neutral-400 py-6 pr-8 pl-4 resize-none h-[200px] lg:h-[200px]`}/>
                            </motion.div>
                            <motion.span
                                initial={"initial"}
                                animate={"enter"}
                                variants={variants}
                                transition={{
                                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: delayDefault + 0.600
                                }}
                                className={`w-full`}><Button className={`text-neutral-200 px-8 py-6`}>Send
                                Message</Button></motion.span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default ContactPage
