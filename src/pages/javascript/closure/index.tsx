import React from 'react';
import MarkdownRenderer from "@/components/organisms/MarkdownRenderer";
import {getMdxContent} from "@/utils/mdxUtils";
import path from "path";

export async function getStaticProps() {
    const postPath = path.join(
        process.cwd(),
        'src',
        'pages',
        'javascript',
        'closure',
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

const JSClosureHome: React.FC<PropsType> = ({mdxSource}) => {
    return (
        <React.Fragment>

            <MarkdownRenderer title={'JS Closure'} mdxSource={mdxSource}/>

        </React.Fragment>
    )
}

export default JSClosureHome;