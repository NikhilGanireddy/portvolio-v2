"use client"
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../../ui/carousel";
import IconArrowRight from "../../../icons/ArrowRight";

const Project = ({title, id, href, images, skills, height, width}) => {

    const variants = {
        initial: {
            y: "30px", opacity: 0
        }, enter: {
            y: 0, opacity: 1
        }
    }

    return <Link key={id} href={href} target={"_blank"} id={id}
    >
        <motion.div
            initial={"initial"}
            animate={"enter"}
            variants={variants}
            transition={{
                duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.5
            }}
            className={`group  flex flex-col w-full h-full border-neutral-400 border rounded-xl p-2 space-y-2 aspect-square lg:aspect-video relative `}>
            <div className={`flex w-full justify-start gap-1 px-1`}>
                <motion.span
                    initial={"initial"}
                    animate={"enter"}
                    variants={variants}
                    transition={{
                        duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.55
                    }}
                    className={`w-2 h-2 rounded-full bg-black`}/>
                <motion.span
                    initial={"initial"}
                    animate={"enter"}
                    variants={variants}
                    transition={{
                        duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.6
                    }}
                    className={`w-2 h-2 rounded-full bg-black`}/>
                <motion.span
                    initial={"initial"}
                    animate={"enter"}
                    variants={variants}
                    transition={{
                        duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.65
                    }}
                    className={`w-2 h-2 rounded-full bg-black`}/>
            </div>
            <motion.div
                initial={"initial"}
                animate={"enter"}
                variants={variants}
                transition={{
                    duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.7
                }}
                className={`rounded-xl overflow-hidden `}>
                <Carousel className={`w-full h-full relative overflow-hidden`} opts={{
                    loop: true, align: "center", fit: "cover"
                }}>
                    <h1 className={`absolute text-black backdrop-blur-2xl z-10 top-0 rounded-full right-0 text-sm px-4 py-2 flex gap-2 justify-center items-center`}>
                        <span>Drag to see the pics</span>
                        <IconArrowRight
                            className={` inline-flex`}/>
                    </h1>
                    <CarouselContent>
                        {images.map((image, index) => <CarouselItem className={`w-full h-full`} key={index}><Image
                            src={image} alt={title}
                            height={height} width={width}
                            priority={true}
                            className={`min-h-[425px] object-cover rounded-2xl object-center aspect-square lg:aspect-video scale-100 group-hover:scale-105 transition-all duration-200`}/></CarouselItem>)}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>


            </motion.div>
            <div className={`px-1 py-2 flex flex-col gap-2 overflow-hidden`}>
                <motion.h1

                    initial={"initial"}
                    animate={"enter"}
                    variants={variants}
                    transition={{
                        duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.75
                    }}
                    className={`text-xl lg:text-2xl tracking-[-0.055em]  font-normal`}>{title}</motion.h1>
                <div className={`w-full flex justify-start items-center gap-2 flex-wrap`}>
                    {skills.map((skill, index) => <motion.span
                        key={index}
                        initial={"initial"}
                        animate={"enter"}
                        variants={variants}
                        transition={{
                            duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.75 + (index * 0.25)
                        }}
                        className={`px-2 py-1  rounded-full border border-neutral-400 text-xs`}>{skill}</motion.span>)}
                </div>
            </div>
        </motion.div>
    </Link>
}

export default Project
