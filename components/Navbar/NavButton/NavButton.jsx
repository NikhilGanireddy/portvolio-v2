"use client"
import {motion} from "framer-motion";
import PerspectiveText from "../../PerspectiveText";

const NavButton = ({isActive, setIsActive}) => {
    return <div
        className={`z-30 h-[50px] w-[100px] rounded-3xl right-0 cursor-pointer absolute top-1/2 -translate-y-1/2 overflow-hidden`}
        onClick={() => setIsActive(!isActive)}
    >
        <motion.div
            animate={{
                top: isActive ? "-100%" : "0"
            }}
            transition={{
                duration: 0.7, ease: [0.83, 0, 0.17, 1]
            }}
            className={`slider relative w-full h-full`}>
            <div
                className={`btns w-full h-full bg-black text-neutral-200`}>
                <PerspectiveText text={"MENU"}/>
            </div>

            <div
                className={`btns w-full h-full bg-neutral-200 text-black absolute top-full`}>
                <PerspectiveText text={"CLOSE"}/>
            </div>
        </motion.div>
    </div>
}

export default NavButton
