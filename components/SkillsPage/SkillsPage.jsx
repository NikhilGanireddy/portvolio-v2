"use client"

import skills from "./index";

const SkillsPage = () => {

    return <div
        className={`flex flex-col justify-center items-center h-full min-h-full  rounded-b-3xl overflow-y-auto  bg-neutral-200 text-black px-4 lg:px-16 pb-2 lg:pb-4`}>
        <div
            className={` h-full w-full flex flex-col justify-end pt-24 py-12 lg:py-24 items-center gap-4 lg:gap-8`}>
            <div
                className={`h-max w-full flex justify-between items-center border-b border-b-neutral-300 pb-8 lg:pb-12`}>
                <h1 className={`text-4xl lg:text-5xl tracking-[-0.055em] font-normal`}>Skills</h1>
            </div>
            <div className={` w-full flex gap-20 `}>
                <div
                    className={` w-full flex justify-center items-center border border-black p-12 rounded-3xl min-h-[500px] overflow-y-auto`}>
                    <ul className={`h-full`}>
                        {skills.map((skill, index) => <li className={`h-full`} key={index}>
                            <p>{skill.title}</p>
                        </li>)}
                    </ul>
                </div>
                <div
                    className={` w-full flex justify-center items-center border border-black p-12 rounded-3xl min-h-[500px]`}>2
                </div>
            </div>
        </div>
    </div>
}

export default SkillsPage
