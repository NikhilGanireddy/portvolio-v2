"use client"
import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";
import NavButton from "./NavButton/NavButton";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const variants = {
        open: {
            maxWidth: 600, width: "100%", height: 650, top: "290px", right: "-10px",
        }, closed: {
            width: 100, height: 50, top: "0px", right: "0px"
        }
    }

    return <div className={`relative w-full flex justify-between items-center px-4 lg:px-16 py-8 lg:py-12 h-max`}>
        <Link href={"/"} className={`w-max font-semibold text-base lg:text-lg tracking-tight `}>
            <h1 className={`w-fit`}>Nikhil&nbsp;Ganireddy</h1>
        </Link>
        <div className={`fixed w-full right-4 lg:right-10`}>
            <motion.div
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial={"closed"}
                transition={{
                    duration: 0.7, ease: [0.83, 0, 0.17, 1]
                }}
                className={` absolute w-full top-1/2 -translate-y-1/2 right-0  bg-black rounded-3xl`}>

            </motion.div>
            < NavButton isActive={isActive} setIsActive={setIsActive}/>
        </div>
    </div>
}

export default Navbar
