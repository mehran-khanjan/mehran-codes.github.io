import React from 'react';
import Head from "next/head";
import MainLayout from "@/components/templates/MainLayout";
import {routes} from "@/utils/routes";
import Image from "next/image";
import mehran from '@/assets/images/mehran-khanjan-photo.jpg';

const About = () => {
    return (
        <>
            <div className="col-12">
                <h1>About Mehran Khanjan</h1>

                <hr/>

                <div className="row">
                    <p>
                        <Image
                            src={mehran}
                            alt={'Mehran Khanjan Picture'}
                            width={100}
                            height={100}
                            className="mb-3"
                        />

                        <br/>

                        Hi! My names is <b>Mehran</b> and I am a <b>full-stack developer</b> with over 5 years of experience in
                        designing, developing, and deploying software solutions. I am
                        proficient in ReactJS, NextJS, ExpressJS, and NestJS. My expertise
                        includes NoSQL database design and management, specifically with
                        MongoDB, as well as SQL databases like MySQL and
                        PostgreSQL. I am also skilled in using Docker, Docker Compose and
                        Kubernetes with AWS.
                    </p>
                </div>

                <p>
                    I am a <b>problem-solver</b> who thrives in a fast-paced and dynamic
                    environment. I have a passion for building clean, efficient, and
                    maintainable code. I also have experience working in Agile
                    environments. I am always looking for ways to improve and optimize
                    my skills and am eager to learn new technologies and best practices.
                    My strong analytical and critical thinking skills, combined with my
                    ability to effectively communicate with both technical and
                    non-technical team members, make me an asset to any organization.
                </p>

                <p>
                    In addition to my full-stack development expertise, I am experienced
                    in <b>blockchain development</b>. I have worked on designing and deploying
                    smart contracts using Solidity and Rust, integrating blockchain
                    technology into decentralized applications (DApps), and building
                    solutions on Ethereum, Binance Chain (BSC) and Solana. I am
                    passionate about leveraging blockchain to create secure, transparent,
                    and efficient systems.
                </p>

                <p>
                    To <b>contact</b> me use this link via LinkedIn:
                    <a href="https://www.linkedin.com/in/mehran-khanjan/" className="px-2">
                        LinkedIn Page
                    </a>
                </p>
            </div>
        </>

    )
}

About.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.about.title}>
            {page}
        </MainLayout>
    )
}

export default About;