import React from 'react';
import MarkdownRenderer from "@/components/organisms/MarkdownRenderer/MarkdownRenderer";
import path from "path";
import {getMdxContent} from "@/utils/mdxUtils";
import MainLayout from "@/components/templates/MainLayout";
import {routes} from "@/utils/routes";

export async function getStaticProps() {
    const postPath = path.join(
        process.cwd(),
        'src',
        'pages',
        'lms',
        'articles',
        'blockchain',
        'solana',
        'hello-world-front-end',
        'data.md'
    );
    const {fileContent, mdxSource} = await getMdxContent(postPath);
    return {props: {fileContent, mdxSource}};
}

type PropsType = {
    title: string,
    // fileContent: string,
    mdxSource: any
}

type BSHelloWorldFrontEndType = React.FC<PropsType> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const BSHelloWorldFrontEnd: BSHelloWorldFrontEndType = ({mdxSource}) => {
    return (
        <MarkdownRenderer mdxSource={mdxSource}/>
    )
}

BSHelloWorldFrontEnd.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.BSHelloWorldFrontEnd.title}>
            {page}
        </MainLayout>
    )
}

export default BSHelloWorldFrontEnd;