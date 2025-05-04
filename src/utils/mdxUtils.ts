import path from "path";
import fs from "fs";
import {serialize} from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

export const getMdxContent = async (filePath: string) => {
    // 1. Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // 2. Parse Markdown and content
    const mdxSource = await serialize(fileContent, {
        mdxOptions: {
            remarkPlugins: [
                remarkGfm,
                remarkMath
            ], // Parse LaTeX math
            rehypePlugins: [
                [rehypeKatex], // Render math to HTML
                [rehypeHighlight], // Syntax highlighting
            ],
        },
    })

    //3. return
    return {fileContent, mdxSource};
}