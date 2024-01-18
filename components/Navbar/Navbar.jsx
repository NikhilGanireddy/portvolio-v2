"use client"
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {useContext} from "react";
import NavButton from "./NavButton/NavButton";
import NavLinks from "./NavLinks/NavLinks";
import {GlobalContext} from "../../app/Context/contextApi";
import PerspectiveText from "../PerspectiveText";

const Navbar = () => {
    const {isActive, setIsActive} = useContext(GlobalContext)

    const variants = {
        open: {
            maxWidth: 500,
            width: "97%",
            height: 450,
            top: "185px",
            right: "-10px",
            transition: {duration: 0.7, ease: [0.83, 0, 0.17, 1]}
        }, closed: {
            width: 100,
            height: 50,
            top: "0px",
            right: "0px",
            transition: {duration: 0.7, delay: 0.35, ease: [0.83, 0, 0.17, 1]}

        }
    }

    const variants2 = {
        initial: {
            y: "-20px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }

    return <div
        className={`z-30 bg-neutral-200 rounded-t-3xl text-black w-full flex justify-between items-center px-4 lg:px-16 min-h-[px] h-[95px] lg:h-[150px] relative`}>
        <Link href={"/"} className={`w-max font-semibold text-base lg:text-lg tracking-tight `}>
            <motion.h1
                initial={"initial"}
                animate={"enter"}
                variants={variants2}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1]
                }}
                className={`btns w-fit font-normal`}>
                <PerspectiveText text={`Nikhil Ganireddy`}/>
            </motion.h1>
        </Link>

        <motion.div
            className={`fixed md:relative w-full right-4 lg:right-5`}
            initial={"initial"}
            animate={"enter"}
            variants={variants2}
            transition={{
                duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.1
            }}
        >
            <motion.div

                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial={"closed"}
                transition={{
                    duration: 0.7, ease: [0.83, 0, 0.17, 1]
                }}
                className={` absolute top-1/2 -translate-y-1/2 right-0  bg-black rounded-3xl`}>
                <AnimatePresence>
                    {isActive && <NavLinks/>}
                </AnimatePresence>
            </motion.div>
            < NavButton isActive={isActive} setIsActive={setIsActive}/>
        </motion.div>
    </div>
}

export default Navbar
