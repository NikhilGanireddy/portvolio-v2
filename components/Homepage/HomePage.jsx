"use client"
import Link from "next/link";
import IconLine from "../../icons/LineIcon";
import IconArrowRight from "../../icons/ArrowRight";

const HomePage = () => {
    return <div
        className={`flex flex-col justify-center items-center h-full rounded-b-3xl overflow-y-auto bg-white text-black px-4 lg:px-16  `}>
        <div className={`flex-1 flex flex-col justify-center gap-12`}>
            <p className={` text-2xl md:text-4xl lg:text-5xl tracking-[-0.055em]  font-light`}>
                Hello! This is Nikhil Ganireddy<IconLine className={`inline-flex text-black`}/>a passionate UI designer
                and full-stack developer.
                I seamlessly blend design and functionality to craft engaging digital experiences for
                brands and users alike.
            </p>

            <p className={`text-lg md:text-xl lg:text-3xl text-neutral-400 tracking-tighter`}>If you're interested in
                working with me,
                <Link href={"/"} className={`text-black ml-2 group hover:text-orange-500 ease-in duration-200 transition-all`}>
                    let’s talk
                    <IconArrowRight className={` inline-flex ml-1 group-hover:translate-x-2 ease-in duration-200 transition-all group-hover:text-orange-500`}/>

                </Link>
            </p>
        </div>
        <div className={`h-max py-12 w-full flex flex-col md:flex-row gap-6`}>
            <div className={`w-full md:w-1/2  flex flex-col justify-center  text-sm md:text-base`}>
                <h4>Freelance</h4>
                <h4>UI Designer</h4>
                <h4>Full stack developer</h4>
            </div>
            <div className={`w-full md:w-1/2 flex justify-between items-end  text-sm md:text-base`}>
                <div>
                    <h4>Based in</h4>
                    <h4>India</h4>
                </div>
                <div>
                    <h4>Get in touch</h4>
                    <a href="mailto:email@example.com"
                       className={`font-normal text-sm md:text-base duration-200 ease-in transition-all hover:text-orange-500 `}>nikhilganireddy@yahoo.com</a>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage
