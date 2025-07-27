import Head from 'next/head';

export default function UnitTestSmartContract() {
    return (
        <>
            <Head>
                <title>How To Unit Test A Smart Contract | Mehran Codes</title>
            </Head>
            <div className="row mt-3">
                <div className="col-12">
                    <h1>How To Unit Test A Smart Contract</h1>

                    <h2>Blockchain Development Series</h2>
                    <h3>DApp Development</h3>
                    <h3>Launchpad Development</h3>
                    <h3>Creating Smart Contract</h3>
                    <h3>&nbsp;</h3>
                    <p>I want to create a launchpad DApp platform. The technologies we want to use are:</p>
                    <ul>
                        <li>Solidity programming language: to develop smart contract</li>
                        <li>Hardhat: to manage smart contracts</li>
                        <li>Chai: to write unit test</li>
                        <li>Next.js: to develop front-end application</li>
                        <li>NestJS: to develop back-end application</li>
                        <li>RabbitMQ: as a message broker for our mircroservices</li>
                        <li>Docker</li>
                    </ul>
                    <p>&nbsp;</p>
                    <p>The list of our services is:</p>
                    <ul>
                        <li>Auth service: to register and authenticate users</li>
                        <li>Launchpad creation service: to create a new launchpad by user</li>
                        <li>Launchpad service: let users participate in a launchpad</li>
                        <li>Worker service: to listen to blockchain transactions</li>
                    </ul>

                </div>
            </div>
        </>
    )
}