"use client"

import Link from "next/link";
import NavMenu from "@/components/Home/Navbar/NavMenu/NavMenu";
import {useState} from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    return <div className={`flex justify-between items-center px-4 lg:px-12 py-6 `}>
        <Link href={"/"} className={` font-semibold text-base lg:text-lg tracking-tight`}>
            <h1>Nikhil Ganireddy</h1>
        </Link>
        <NavMenu isActive={isActive} setIsActive={setIsActive }/>
    </div>
}

export default Navbar
