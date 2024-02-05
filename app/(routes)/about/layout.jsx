import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next"

export const metadata = {
    title: 'thegdp - About', description: "About page of Nikhil Ganireddy's portfolio website",
}

export default function ({children}) {
    return <>
        {children}<Analytics/>
        <SpeedInsights/>
    </>
}
