"use client"
import {motion} from "framer-motion";
import PerspectiveText from "../../../PerspectiveText";

const NavMenu = ({isActive, setIsActive}) => {
    return <div
        className={` h-12 w-24 rounded-full cursor-pointer relative overflow-hidden`}
        onClick={() => setIsActive(!isActive)}
    >
        <motion.div
            animate={{
                top: isActive ? "-100%" : "0"
            }}
            transition={{
                duration: 0.5, ease: [0.83, 0, 0.17, 1]
            }}
            className={`slider relative w-full h-full`}>
            <div
                className={`btns w-full h-full bg-black text-white text-sm font-semibold uppercase`}>
                <PerspectiveText text={"MENU"}/>
            </div>

            <div
                className={`btns w-full h-full bg-white text-black absolute top-full font-semibold text-sm uppercase`}>
                <PerspectiveText text={"CLOSE"}/>
            </div>
        </motion.div>
    </div>
}

export default NavMenu
