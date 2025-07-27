import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React from 'react';
import type {AppProps} from "next/app";
import {NextPage} from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({Component, pageProps}: AppPropsWithLayout) => {

    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(
        <>
            <Component {...pageProps} />
        </>
    );
}

export default App;
