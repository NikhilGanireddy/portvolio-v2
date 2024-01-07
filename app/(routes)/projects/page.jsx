import Navbar from "../../../components/Navbar/Navbar";

const Page = () => {
    return <div className={`h-full flex flex-col`}>
        <div className={`h-[95px] lg:h-[150px] relative`}>
            <Navbar/>
        </div>
        <div className={`flex-1`}>
            projects
        </div>
    </div>
}

export default Page
