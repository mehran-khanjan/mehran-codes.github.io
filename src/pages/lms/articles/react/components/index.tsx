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
        'react',
        'components',
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

type ReactComponentsType = React.FC<PropsType> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
};

const ReactComponents: ReactComponentsType = ({mdxSource}) => {
    return (
        <MarkdownRenderer mdxSource={mdxSource}/>
    )
}

ReactComponents.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <MainLayout title={routes.Recomponents.title}>
            {page}
        </MainLayout>
    )
}

export default ReactComponents;