import React from 'react';
import MarkdownRenderer from "@/components/organisms/MarkdownRenderer/MarkdownRenderer";
import {getMdxContent} from "@/utils/mdxUtils";
import path from "path";

export async function getStaticProps() {
    const postPath = path.join(
        process.cwd(),
        'src',
        'pages',
        'lms',
        'articles',
        'javascript',
        'introduction',
        'data.md'
    );
    const {fileContent, mdxSource} = await getMdxContent(postPath);
    return {props: {fileContent, mdxSource}};
}

type PropsType = {
    title: string,
    // fileContent: string,
    mdxSource: any,
}

const JSIntroduction: React.FC<PropsType> = ({mdxSource}) => {
    return (
        <React.Fragment>

            <MarkdownRenderer mdxSource={mdxSource}/>

        </React.Fragment>
    )
}

export default JSIntroduction;