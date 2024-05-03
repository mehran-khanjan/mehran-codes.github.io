import 'bootstrap/dist/css/bootstrap.min.css';
import type {AppProps} from "next/app";
import Header from "@/components/shared/Header";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Header/>

            <div className="container-fluid ">

                <Component {...pageProps} />

            </div>
        </>
    );
}
