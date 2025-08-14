import React from 'react';
import MainLayout from "@/components/templates/MainLayout";
import {Route, routes} from "@/utils/routes";
import {colors} from "@/utils/colors";
import ArticleItem from "@/components/organisms/ArticleItem";

const fakeData1 = [
    {title: routes.BSintroduction.title, url: routes.BSintroduction.url},
    {title: routes.BSBasic.title, url: routes.BSBasic.url},
    {title: routes.BSProgrammingModel.title, url: routes.BSProgrammingModel.url},
    {title: routes.BSHelloWorld.title, url: routes.BSHelloWorld.url},
    // {title: routes.BEintroduction.title, url: routes.BEintroduction.url},
]

const fakeData2 = [
    {title: routes.Ruintroduction.title, url: routes.Ruintroduction.url},
]

const fakeData3 = [
    {title: routes.Reintroduction.title, url: routes.Reintroduction.url},
    // {title: routes.Recomponents.title, url: routes.Recomponents.url},
]

const Home = () => {
    return (
        <>
            <div className="col-12">

                <h1>Articles</h1>

                <hr/>

                <ArticleItem
                    title={'Blockchain'}
                    items={fakeData1}
                    color={colors.green}
                    isMultiSection={true}
                />

                <ArticleItem
                    title={'Rust'}
                    items={fakeData2}
                    color={colors.red}
                    isMultiSection={false}
                />

                <ArticleItem
                    title={'React'}
                    items={fakeData3}
                    color={colors.orange}
                    isMultiSection={false}
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
