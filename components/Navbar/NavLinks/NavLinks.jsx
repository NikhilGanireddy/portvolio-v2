"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import {footerlinks, links} from "./index";
import {useContext} from "react";
import {GlobalContext} from "../../../app/Context/contextApi";

const NavLinks = () => {
    const {isActive, setIsActive} = useContext(GlobalContext)

    const perspective = {
        initial: {
            opacity: 0, rotateX: 30, translateY: 80, translateX: -20,
        }, enter: (index) => ({
            opacity: 1, rotateX: 0, translateY: 0, translateX: 0, transition: {
                duration: 0.5, delay: 0.5 + (index * 0.1), ease: [.215, .61, .355, 1], opacity: {duration: 0.75}
            }
        }), exit: {
            opacity: 0, transition: {duration: 0.5, type: "linear", ease: [0.83, 0, 0.17, 1]}
        }
    }

    const slideIn = {
        initial: {
            opacity: 0, y: 20
        }, enter: (index) => ({
            opacity: 1, y: 0, transition: {
                duration: 0.5, delay: 1 + (index * 0.1), ease: [.215, .61, .355, 1]
            }
        }), exit: {
            opacity: 0, transition: {duration: 0.5, type: "tween", ease: "easeInOut"}
        }
    }

    return <div className={` text-white p-4 w-full h-full box-border pt-24 px-10 pb-10 space-y-12`}>
        <div className={` flex flex-col justify-center gap-6`}>
            {links.map((link, index) => <div
                key={index}
                className={` perspective-class`}
            >
                <motion.div
                    href={link.href}
                    custom={index}
                    variants={perspective}
                    animate={"enter"}
                    initial={"initial"}
                    exit={"exit"}
                >
                    <Link
                        href={link.href}
                        key={index}
                        className={` text-4xl `}
                        onClick={() => setIsActive(!isActive)}
                    >
                        {link.title}
                    </Link>
                </motion.div>
            </div>)}
        </div>

        <div className={` flex  justify-start items-center gap-6 flex-wrap`}>
            {footerlinks.map((link, index) => <div
                key={index}
                className={` perspective-class`}
            >
                <motion.div
                    custom={index}
                    variants={slideIn}
                    animate={"enter"}
                    initial={"initial"}
                    exit={"exit"}
                    className={`space-x-2`}
                >
                    <Link
                        href={link.href}
                        target={"_blank"}
                        key={index}
                        onClick={() => setIsActive(!isActive)}
                        className={` text-xl font-extralight`}>
                        {link.title}
                    </Link>
                </motion.div>
            </div>)}
        </div>
    </div>
}

export default NavLinks
