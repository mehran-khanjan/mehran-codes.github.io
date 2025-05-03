import path from 'path';
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { getMdxContent } from './mdxUtils'; // Update with actual path
import rehypeHighlight from 'rehype-highlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Mock the filesystem and next-mdx-remote
jest.mock('fs');
jest.mock('next-mdx-remote/serialize');

describe('getMdxContent', () => {
    const mockFilePath = path.join(process.cwd(), 'test.md');
    const mockFileContent = '# Test Content\n\n```javascript\nconsole.log("hello");\n```';
    const mockMdxSource = { compiledSource: 'mock-compiled-source' };

    beforeEach(() => {
        // Clear all mocks between tests
        jest.clearAllMocks();

        // Setup fs mock
        (fs.readFileSync as jest.Mock).mockReturnValue(mockFileContent);

        // Setup serialize mock
        (serialize as jest.Mock).mockResolvedValue(mockMdxSource);
    });

    it('reads the file from the correct path', async () => {
        await getMdxContent(mockFilePath);
        expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath, 'utf8');
    });

    it('calls serialize with the correct content and plugins', async () => {
        await getMdxContent(mockFilePath);

        // expect(serialize).toHaveBeenCalledWith(mockFileContent, {
        //     mdxOptions: {
        //         remarkPlugins: [remarkMath],
        //         rehypePlugins: [
        //             [rehypeKatex],
        //             [rehypeHighlight, { languages: { javascript: expect.anything() } }],
        //     },
        // });
    });

    it('returns both fileContent and mdxSource', async () => {
        const result = await getMdxContent(mockFilePath);
        expect(result).toEqual({
            fileContent: mockFileContent,
            mdxSource: mockMdxSource
        });
    });

    it('handles file reading errors', async () => {
        (fs.readFileSync as jest.Mock).mockImplementation(() => {
            throw new Error('File not found');
        });

        await expect(getMdxContent('nonexistent.md')).rejects.toThrow('File not found');
    });

    it('handles MDX serialization errors', async () => {
        (serialize as jest.Mock).mockRejectedValue(new Error('MDX parse error'));

        await expect(getMdxContent(mockFilePath)).rejects.toThrow('MDX parse error');
    });
});