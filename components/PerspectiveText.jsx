"use client"
const PerspectiveText = ({text}) => {
    return <div className={`perspective flex-col flex items-center justify-center relative w-max h-full`}>
        <p className={`perspective-first lg:text-base text-sm font-normal `}>{text}</p>
        <p className={` absolute perspective-second lg:text-base text-sm font-normal `}>{text}</p>
    </div>
}

export default PerspectiveText
