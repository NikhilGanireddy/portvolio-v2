"use client"
import HomePage from "../components/Homepage/HomePage";
import Navbar from "../components/Navbar/Navbar";
import {motion} from "framer-motion";
import useMousePosition from "../utils/cursor";
import {useContext} from "react";
import {GlobalContext} from "./Context/contextApi";

export default function Home() {

    const {isActive, setIsActive} = useContext(GlobalContext)
    const {x, y} = useMousePosition()
    return (<div className={`h-full min-h-screen flex flex-col relative overflow-hidden`} onClick={() => {
        isActive ? setIsActive(!isActive) : null
    }}>
        <motion.div
            initial={{
                translateX: "0", translateY: "0", opacity: 0
            }}
            animate={{
                translateX: x - 32, translateY: y - 32, opacity: 1,
            }}
            transition={{type: "tween", ease: "backOut", duration: 0.3}}
            className={`hidden md:inline-flex md:absolute md:w-16 md:h-16 md:border-[1px] md:border-black md:bg-transparent md:rounded-full md:z-50 pointer-events-none `}/>
        <motion.div
            initial={{
                translateX: "0", translateY: "0", opacity: 0
            }}
            animate={{
                translateX: x - 2, translateY: y - 2, opacity: 1,
            }}
            transition={{type: "tween", ease: "backOut", duration: 0.1}}
            className={`hidden md:inline-flex md:absolute md:w-2 md:h-2 md:bg-black md:rounded-full md:z-50 pointer-events-none`}/>

        <div className={`h-[95px] lg:h-[150px] relative`}>
            <Navbar/>
        </div>
        <div className={`flex-1`}>
            <HomePage/>
        </div>
    </div>)
}


// width= 2228pxheight= 1235px