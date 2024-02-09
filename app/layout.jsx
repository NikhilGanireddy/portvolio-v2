import {Inter} from 'next/font/google'
import './globals.css'
import {GlobalContextProvider} from "./Context/contextApi";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'thegdp', description: "Nikhil Ganireddy's portfolio website",
}

export default function RootLayout({
                                       children,
                                   }) {
    return <html lang="en">
    <head>
        <link rel='icon' href={"./favicon-512x512.png"}/>
        <link rel="apple-touch-icon" href={"./apple-touch-icon.png"}/>
        {/*<title></title>*/}
    </head>
    <body className={`bg-black text-neutral-200 h-screen  ${inter.className}`}>
    <GlobalContextProvider>
        {children}
    </GlobalContextProvider>
    </body>
    </html>
}
