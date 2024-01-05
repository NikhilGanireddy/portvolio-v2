"use client"
const PerspectiveText = ({text}) => {
    return <div className={`perspective flex-col flex items-center justify-center relative w-full h-full`}>
        <p className={`perspective-first lg:text-sm text-xs font-semibold uppercase`}>{text}</p>
        <p className={` absolute perspective-second lg:text-sm text-xs font-semibold uppercase`}>{text}</p>

    </div>
}

export default PerspectiveText
