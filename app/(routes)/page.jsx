import HomePage from "../../components/Homepage/HomePage";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
    return (<div className={`h-full flex flex-col`}>
        <div className={`h-[95px] lg:h-[150px] relative`}>
            <Navbar/>
        </div>
        <div className={`flex-1`}>
            <HomePage/>
        </div>
    </div>)
}
