import {Inter} from 'next/font/google'
import '../globals.css'
import {GlobalContextProvider} from "../Context/contextApi";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'thegdp', description: "Nikhil Ganireddy's portfolio website",
}

export default function RootLayout({
                                       children,
                                   }) {
    return (<html lang="en">
    <body className={`bg-black text-neutral-200 h-screen  ${inter.className}`}>
    <GlobalContextProvider>
        {children}
    </GlobalContextProvider>
    </body>
    </html>)
}
