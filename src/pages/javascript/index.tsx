import React from 'react';
import MarkdownRenderer from "@/components/organisms/MarkdownRenderer";
import path from "path";
import {getMdxContent} from "@/utils/mdxUtils";

export async function getStaticProps() {
    const postPath = path.join(
        process.cwd(),
        'src',
        'pages',
        'javascript',
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

const JSHome: React.FC<PropsType> = ({mdxSource}) => {
    return (
        <MarkdownRenderer title={'JavaScript Home'} mdxSource={mdxSource}/>
    )
}

export default JSHome;