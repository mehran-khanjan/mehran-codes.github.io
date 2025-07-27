import React from 'react';
import Head from "next/head";
import {MDXRemote} from "next-mdx-remote";
import 'highlight.js/styles/atom-one-light.css';
import 'katex/dist/katex.min.css';
import styles from './MarkdownRenderer.module.css';

type PropsType = {
    // title: string,
    // fileContent: string,
    mdxSource: any,
}

const components = {
    // h1: (props: any) => <h1 className="text-3xl font-bold" {...props} />,
    // p: (props: any) => <p className="sample" {...props} />,
    // code: (props: any) => (
    //     <code className={props.className}>{props.children}</code>
    // ),
    // pre: (props: any) => (
    //     <pre className="bg-gray-800 text-white p-4 rounded">{props.children}</pre>
    // ),
    table: (props: any) => <table className="table table-striped table-bordered table-responsive" {...props} />
};

// const MarkdownRenderer: React.FC<PropsType> = ({title, mdxSource}) => {
const MarkdownRenderer: React.FC<PropsType> = ({mdxSource}) => {
    return (
        <React.Fragment>
            {/*<Head>*/}
            {/*    <title>{`${title} | Mehran Codes`}</title>*/}
            {/*</Head>*/}

            <div className={styles.wrapper}>
                <MDXRemote {...mdxSource} components={components}/>
                {/*<MDXRemote {...mdxSource} />*/}
            </div>
        </React.Fragment>
    )
}

export default MarkdownRenderer;