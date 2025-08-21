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
        'javascript',
        'serialization',
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

type JSSerializationType = React.FC<PropsType> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const JSSerialization: JSSerializationType = ({mdxSource}) => {
    return (
        <MarkdownRenderer mdxSource={mdxSource}/>
    )
}

JSSerialization.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.JSSerialization.title}>
            {page}
        </MainLayout>
    )
}

export default JSSerialization;