import React, {ReactNode} from 'react';
import Header from "@/components/organisms/Header";
import Head from "next/head";
import {emptySpace, siteDescription, siteMainTitle} from "@/utils/metadata";

type PropsTypes = {
    title: string,
    children: ReactNode
}

const MainLayout: React.FC<PropsTypes> = ({title, children}) => {
    const finalTitle = `${title}${emptySpace}${siteMainTitle}`
    return (
        <>
            <Head>
                <title>{finalTitle}</title>
                <meta name="description" content={siteDescription}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>

            <div className="container-fluid">

                <div className="row mt-3">
                    {children}
                </div>

            </div>
        </>
    )
}

export default MainLayout;