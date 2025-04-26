import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Mehran Khanjan</title>
                <meta name="description" content="Blockchain development tutorials by Mehran Khanjan"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="row mt-3">
                <div className="col-12">
                    <h1>
                        Blockchain Development Articles List
                    </h1>
                    <ul className="">
                        <li className="mt-2">
                            <Link href={'/blockchain/unit-test-smart-contract'}>
                                Unit Testing for a smart contract
                            </Link>
                        </li>

                        <li className="mt-2">
                            <Link href={'/blockchain/unit-test-smart-contract'}>
                                Unit Testing for a smart contract
                            </Link>
                        </li>

                        <li className="mt-2">
                            <Link href={'/blockchain/write-unit-test-code-for-a-contract'}>
                                Unit Testing for a smart contract
                            </Link>
                        </li>

                        <li className="mt-2">
                            <Link href={'/blockchain/write-unit-test-code-for-a-contract'}>
                                Unit Testing for a smart contract
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

        </>
    );
}
