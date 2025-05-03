import Head from "next/head";
import Link from "next/link";

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
                    <h2>
                        <Link href={'/javascript'}>
                            JavaScript
                        </Link>
                    </h2>
                    <ul className="">
                        <li className="mt-2">
                            <Link href={'/javascript/introduction'}>
                                Introduction to JavaScript
                            </Link>
                        </li>
                    </ul>

                    <h2>
                        <Link href={'/react'}>
                            ReactJS
                        </Link>
                    </h2>
                    <ul className="">
                        <li className="mt-2">
                            <Link href={'/react/introduction'}>
                                Introduction to React
                            </Link>
                        </li>
                    </ul>

                    <h2>
                        Blockchain
                    </h2>
                    <ul className="">
                        <li className="mt-2">
                            <Link href={'/blockchain/unit-test-smart-contract'}>
                                Unit Testing for a smart contract
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}
