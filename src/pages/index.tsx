import React from 'react';
import Link from "next/link";
import MainLayout from "@/components/templates/MainLayout";
import {Route, routes} from "@/utils/routes";
import {colors} from "@/utils/colors";
import ArticleItem from "@/components/organisms/ArticleItem";
import {v4 as uuid} from 'uuid';
import {inspect} from "util";

const fakeData = [
    {title: routes.BSintroduction.title, url: routes.BSintroduction.url},
    {title: routes.BSBasic.title, url: routes.BSBasic.url},
    // {title: routes.BSProgrammingModel.title, url: routes.BSProgrammingModel.url},
    // {title: routes.BSHelloWorld.title, url: routes.BSHelloWorld.url},
    // {title: routes.BEintroduction.title, url: routes.BEintroduction.url},
]

const Home = () => {
    return (
        <>
            <div className="col-12">

                <h1>Articles</h1>

                <hr/>

                <ArticleItem
                    key={uuid()}
                    items={fakeData}
                    color={colors.green}
                />


                {/*<h2>*/}
                {/*    <Link href={'/math'}>*/}
                {/*        Math*/}
                {/*    </Link>*/}
                {/*</h2>*/}
                {/*<ul className="">*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/javascript/introduction'}>*/}
                {/*            Introduction to JavaScript*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

                {/*<h2>*/}
                {/*    <Link href={'/dsa'}>*/}
                {/*        DSA*/}
                {/*    </Link>*/}
                {/*</h2>*/}
                {/*<ul className="">*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/dsa/introduction'}>*/}
                {/*            Introduction to DSA*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

                {/*<h2>*/}
                {/*    <Link href={'/javascript'}>*/}
                {/*        JavaScript*/}
                {/*    </Link>*/}
                {/*</h2>*/}
                {/*<ul className="">*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/javascript/introduction'}>*/}
                {/*            Introduction to JavaScript*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/javascript/closure'}>*/}
                {/*            Closure*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/javascript/testing'}>*/}
                {/*            Testing*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

                {/*<h2>*/}
                {/*    <Link href={'/react'}>*/}
                {/*        ReactJS*/}
                {/*    </Link>*/}
                {/*</h2>*/}
                {/*<ul className="">*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/react/introduction'}>*/}
                {/*            Introduction to React*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}

                {/*<h2>*/}
                {/*    <Link href={'/next'}>*/}
                {/*        NextJS*/}
                {/*    </Link>*/}
                {/*</h2>*/}
                {/*<ul className="">*/}
                {/*    <li className="mt-2">*/}
                {/*        <Link href={'/next/introduction'}>*/}
                {/*            Introduction to Next*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}


            </div>
        </>
    );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.home.title}>
            {page}
        </MainLayout>
    )
}

export default Home;
